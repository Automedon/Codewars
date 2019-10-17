function sumTriangularNumbers(n) {
  let sum = 0,
    total = 0;
  for (let i = 0; i <= n; i++) {
    sum += i * 1;
    total += sum;
  }
  return total;
}
