function encode(str, n) {
  const key = String(n);
  return Array.from(
    str,
    (c, i) => c.charCodeAt(0) - 96 + Number(key[i % key.length])
  );
}
