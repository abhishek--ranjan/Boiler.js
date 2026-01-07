function readCookie(name) {
  const value = document.cookie.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${name}=`));
  if (!value) {
    return null;
  }
  return decodeURIComponent(value.split('=')[1]);
}

async function request(method, url, { data, headers, credentials = 'include' } = {}) {
  const finalHeaders = Object.assign({ 'Content-Type': 'application/json' }, headers || {});
  const csrfToken = readCookie('XSRF-TOKEN');
  if (csrfToken) {
    finalHeaders['X-CSRF-Token'] = csrfToken;
  }

  const options = {
    method,
    headers: finalHeaders,
    credentials
  };

  if (data !== undefined) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  const contentType = response.headers.get('content-type') || '';
  const payload = contentType.includes('application/json') ? await response.json() : await response.text();

  if (!response.ok) {
    const message = typeof payload === 'string' ? payload : JSON.stringify(payload);
    throw new Error(`API ${method} ${url} failed: ${message}`);
  }

  return payload;
}

export const api = {
  request,
  get(url, options) {
    return request('GET', url, options);
  },
  post(url, options) {
    return request('POST', url, options);
  },
  put(url, options) {
    return request('PUT', url, options);
  },
  delete(url, options) {
    return request('DELETE', url, options);
  }
};
