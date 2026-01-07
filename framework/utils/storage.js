function ensureKey(key) {
  if (!key || typeof key !== 'string') {
    throw new Error('Storage key must be a non-empty string.');
  }
}

export function createStorage(namespace = 'app') {
  const prefix = `${namespace}::`;

  function buildKey(key) {
    ensureKey(key);
    return `${prefix}${key}`;
  }

  return {
    get(key) {
      const stored = localStorage.getItem(buildKey(key));
      if (stored === null) {
        return null;
      }
      try {
        return JSON.parse(stored);
      } catch (error) {
        return stored;
      }
    },
    set(key, value) {
      const payload = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(buildKey(key), payload);
    },
    remove(key) {
      localStorage.removeItem(buildKey(key));
    },
    clear() {
      Object.keys(localStorage)
        .filter((storedKey) => storedKey.startsWith(prefix))
        .forEach((storedKey) => localStorage.removeItem(storedKey));
    }
  };
}
