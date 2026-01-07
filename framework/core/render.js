import { createComponent } from './component.js';

export async function render(componentDefinition, target, props = {}) {
  const runtime = createComponent(componentDefinition);
  return runtime.mount(target, props);
}
