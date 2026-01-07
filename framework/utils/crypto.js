function ensureCrypto() {
  if (!(window.crypto && window.crypto.subtle)) {
    throw new Error('Web Crypto API is not available in this environment.');
  }
  return window.crypto.subtle;
}

async function digest(algorithm, data) {
  const subtle = ensureCrypto();
  const buffer = await subtle.digest(algorithm, data);
  return buffer;
}

function toHex(buffer) {
  const bytes = new Uint8Array(buffer);
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export const crypto = {
  async hashSha256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await digest('SHA-256', data);
    return toHex(hashBuffer);
  },
  async randomBytes(length) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return array;
  },
  async generateKey(options = { name: 'AES-GCM', length: 256 }) {
    const subtle = ensureCrypto();
    return subtle.generateKey(options, true, ['encrypt', 'decrypt']);
  }
};
