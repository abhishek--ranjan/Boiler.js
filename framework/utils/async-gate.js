export class AsyncGate {
  constructor() {
    this.pending = new Set();
  }

  register(promise) {
    if (!promise || typeof promise.then !== 'function') {
      throw new Error('AsyncGate expects a promise.');
    }
    this.pending.add(promise);
    promise.finally(() => this.pending.delete(promise));
    return promise;
  }

  async wait() {
    await Promise.all(Array.from(this.pending));
  }

  get isOpen() {
    return this.pending.size === 0;
  }
}
