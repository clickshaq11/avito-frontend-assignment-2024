function sanitizeString(str: string) {
  return str.replace(/<\/?[^>]+(>|$)/g, '');
}

export { sanitizeString };
