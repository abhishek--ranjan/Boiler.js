function isObject(value) {
  return typeof value === 'object' && value !== null;
}

function clone(value) {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value || {}));
}

function makeReactive(target, onChange, path = []) {
  if (!isObject(target)) {
    return target;
  }

  const proxiedTarget = Array.isArray(target) ? target.slice() : { ...target };

  Object.keys(proxiedTarget).forEach((key) => {
    proxiedTarget[key] = makeReactive(proxiedTarget[key], onChange, path.concat(key));
  });

  return new Proxy(proxiedTarget, {
    set(obj, key, value) {
      obj[key] = makeReactive(value, onChange, path.concat(key));
      onChange(path.concat(key), obj[key]);
      return true;
    },
    deleteProperty() {
      throw new Error('State properties cannot be deleted. Use explicit mutations.');
    }
  });
}

export function createState(initialState, onChange) {
  const seed = isObject(initialState) ? initialState : {};
  const consumer = typeof onChange === 'function' ? onChange : () => {};
  return makeReactive(clone(seed), consumer, []);
}
