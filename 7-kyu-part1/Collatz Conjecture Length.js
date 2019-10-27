function collatz(n) {
  return n === 1
    ? 1
    : n % 2 === 0
    ? 1 + collatz(n / 2)
    : 1 + collatz(3 * n + 1);
}
