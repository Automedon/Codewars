function differenceOfSquares(n) {
  let a = Array.from({ length: n }, (_, index) => 1 + index)
    .map(v => v * v)
    .reduce((acc, next) => acc + next, 0);
  let b =
    Array.from({ length: n }, (_, index) => 1 + index).reduce(
      (acc, next) => acc + next,
      0
    ) ** 2;
  return b - a;
}
