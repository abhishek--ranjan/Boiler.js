// Boiler.js framework entry point

import { render } from './core/render.js';
import { createComponent } from './core/component.js';
import { api } from './utils/api.js';
import { crypto } from './utils/crypto.js';
import { AsyncGate } from './utils/async-gate.js';
import { runPreload } from './utils/preload.js';
import { createStorage } from './utils/storage.js';

export { render, createComponent, api, crypto, AsyncGate, runPreload, createStorage };

export default {
  render,
  createComponent,
  api,
  crypto,
  AsyncGate,
  runPreload,
  createStorage
};
