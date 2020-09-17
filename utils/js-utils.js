export const trimWhitespace = (string = '') =>
  string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
