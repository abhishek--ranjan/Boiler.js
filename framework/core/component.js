import { renderTemplate } from './template.js';
import { createState } from './state.js';
import { runPreload } from '../utils/preload.js';

const STYLE_REGISTRY = new Set();
const ASSET_CACHE = new Map();
const EVENT_ATTR_PATTERN = /^on([a-z]+)/i;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function normalizeTarget(target) {
  if (typeof target === 'string') {
    const node = document.querySelector(target);
    assert(node, `Target selector "${target}" not found.`);
    return node;
  }
  const isElement = typeof Element !== 'undefined' && target instanceof Element;
  assert(isElement, 'Mount target must be a DOM element or selector string.');
  return target;
}

async function resolveAsset(asset) {
  if (!asset) {
    return '';
  }

  const trimmed = asset.trim();
  const isInline = trimmed.startsWith('<') || trimmed.includes('\n');

  if (isInline) {
    return trimmed;
  }

  if (ASSET_CACHE.has(asset)) {
    return ASSET_CACHE.get(asset);
  }

  const response = await fetch(asset, { credentials: 'include' });
  if (!response.ok) {
    throw new Error(`Failed to load asset: ${asset}`);
  }
  const text = await response.text();
  ASSET_CACHE.set(asset, text.trim());
  return ASSET_CACHE.get(asset);
}

function injectStyle(name, styleContent) {
  if (!styleContent || STYLE_REGISTRY.has(name)) {
    return;
  }
  const styleTag = document.createElement('style');
  styleTag.setAttribute('data-component-style', name);
  styleTag.textContent = styleContent;
  document.head.appendChild(styleTag);
  STYLE_REGISTRY.add(name);
}

function bindMethods(methods, context) {
  const bound = {};
  Object.keys(methods || {}).forEach((key) => {
    if (typeof methods[key] !== 'function') {
      throw new Error(`Method ${key} must be a function.`);
    }
    bound[key] = methods[key].bind(context);
  });
  return bound;
}

function wireEvents(root, methods) {
  const listeners = [];

  const bindOnNode = (node) => {
    node.getAttributeNames().forEach((attr) => {
      const match = attr.match(EVENT_ATTR_PATTERN);
      if (!match) {
        return;
      }
      const handlerName = node.getAttribute(attr).trim();
      const eventType = match[1];
      const handler = methods[handlerName];
      if (!handler) {
        throw new Error(`Handler "${handlerName}" is not defined on component methods.`);
      }
      const listener = (event) => handler(event);
      node.removeAttribute(attr);
      node.addEventListener(eventType, listener);
      listeners.push({ node, eventType, listener });
    });
  };

  bindOnNode(root);
  root.querySelectorAll('*').forEach(bindOnNode);

  return () => {
    listeners.forEach(({ node, eventType, listener }) => {
      node.removeEventListener(eventType, listener);
    });
  };
}

function schedule(callback) {
  let frame;
  const win = typeof window !== 'undefined' ? window : {};
  const raf = win.requestAnimationFrame || ((fn) => setTimeout(fn, 16));
  const caf = win.cancelAnimationFrame || clearTimeout;
  return () => {
    if (frame) {
      caf(frame);
    }
    frame = raf(callback);
  };
}

export function createComponent(definition) {
  assert(definition && typeof definition === 'object', 'Component definition must be an object.');
  assert(typeof definition.name === 'string' && definition.name.length > 0, 'Component name is required.');
  assert(typeof definition.template === 'string', `Component ${definition.name} must define a template.`);

  let destroyed = false;
  let teardownEvents = () => {};
  let container = null;
  let stateProxy;
  let templateContent = '';
  let styleContent = '';

  const renderNow = () => {
    if (destroyed) {
      return;
    }
    const html = renderTemplate(templateContent, stateProxy);
    container.innerHTML = html;
    teardownEvents();
    teardownEvents = wireEvents(container, boundMethods);
  };

  const scheduleRender = schedule(renderNow);

  const context = {
    props: {},
    get state() {
      return stateProxy;
    },
    setState(patch) {
      Object.assign(stateProxy, patch);
    },
    destroy() {
      destroy();
    }
  };

  const boundMethods = bindMethods(definition.methods || {}, context);

  async function loadAssets() {
    templateContent = await resolveAsset(definition.template);
    styleContent = definition.style ? await resolveAsset(definition.style) : '';
    injectStyle(definition.name, styleContent);
  }

  async function initState(props) {
    context.props = props;
    const preloadPayload = await runPreload(definition.preload, { props });
    const baseState = Object.assign({}, definition.state || {}, preloadPayload || {});
    stateProxy = createState(baseState, () => {
      scheduleRender();
    });
  }

  async function mount(target, props = {}) {
    container = normalizeTarget(target);
    await loadAssets();
    await initState(props);
    renderNow();
    if (typeof definition.onMount === 'function') {
      definition.onMount.call(context, { props });
    }
    return {
      destroy
    };
  }

  function destroy() {
    if (destroyed) {
      return;
    }
    destroyed = true;
    teardownEvents();
    if (typeof definition.onDestroy === 'function') {
      definition.onDestroy.call(context);
    }
    if (container) {
      container.innerHTML = '';
    }
  }

  return {
    mount,
    destroy: () => destroy()
  };
}
