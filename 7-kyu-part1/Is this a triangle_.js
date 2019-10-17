function isTriangle(a, b, c) {
  let max = Math.max(a, b, c);
  let sum = a + b + c;
  return sum - max > max;
}
