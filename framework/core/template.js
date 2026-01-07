const UNESCAPED_PATTERN = /{{{\s*([\w.]+)\s*}}}/g;
const ESCAPED_PATTERN = /{{\s*([\w.]+)\s*}}/g;

function escapeHtml(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function resolvePath(state, path) {
  const segments = path.split('.');
  let current = state;
  for (const segment of segments) {
    if (current === null || current === undefined) {
      return '';
    }
    current = current[segment];
  }
  return current === undefined ? '' : current;
}

export function renderTemplate(template, state) {
  const unescapedReplaced = template.replace(UNESCAPED_PATTERN, (_, token) => {
    const value = resolvePath(state, token.trim());
    return value === undefined ? '' : String(value);
  });

  return unescapedReplaced.replace(ESCAPED_PATTERN, (_, token) => {
    const value = resolvePath(state, token.trim());
    return escapeHtml(value);
  });
}
