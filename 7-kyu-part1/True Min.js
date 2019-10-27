function min(a, b) {
  a === null && (a = 0);
  b === null && (b = 0);
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return a < b ? a : b;
}
