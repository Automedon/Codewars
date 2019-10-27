/*
Multiple given x by sum of its digits.
Subtract the reversed x.

x will always be: x > 0 && x % 10 != 0 && x % 1 == 0
*/
function calc(x) {
  return (
    x
      .toString()
      .split(``)
      .reduce((a, b) => a + b * 1, 0) *
      x -
    x
      .toString()
      .split(``)
      .reverse().join`` *
      1
  );
}
