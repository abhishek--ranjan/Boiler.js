export async function runPreload(preloadFn, context) {
  if (typeof preloadFn !== 'function') {
    return {};
  }
  const result = await preloadFn(context || {});
  if (result === null || result === undefined) {
    return {};
  }
  if (typeof result !== 'object' || Array.isArray(result)) {
    throw new Error('preload() must return an object that can be merged into state.');
  }
  return result;
}
