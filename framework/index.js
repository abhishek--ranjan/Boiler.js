// Entry point for the base framework
// This will initialize the framework and expose core APIs

import { render } from './core/render.js';
import { createComponent } from './core/component.js';
import { api } from './utils/api.js';
import { crypto } from './utils/crypto.js';

export default {
  render,
  createComponent,
  api,
  crypto
};
