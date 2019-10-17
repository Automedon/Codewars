/*
Description:
Task
You are given three integers l, d and x. Your task is:

• determine the minimal integer n 
    such that l ≤ n ≤ d, and the sum of its digits equals x.
• determine the maximal integer m 
    such that l ≤ m ≤ d, and the sum of its digits equals x.
It is guaranteed that such numbers always exist.

Input/Output
[input] integer l

[input] integer d

1 ≤ l ≤ d ≤ 10000.

[input] integer x

1 ≤ x ≤ 36

[output] an integer array

Array of two elements, where the first element is n, and the second one is m.

Example
For l = 500, d = 505, x = 10, the output should be [505, 505].

For l = 100, d = 200, x = 10, the output should be [109, 190].
*/
function minAndMax(l, d, x) {
  let n = 0;
  let m = 0;
  for (let i = l; i <= d; i++) {
    if (
      i
        .toString()
        .split("")
        .reduce((a, b) => a + b * 1, 0) === x
    )
      n = i;
  }
  for (let i = d; i >= l; i--) {
    if (
      i
        .toString()
        .split("")
        .reduce((a, b) => a + b * 1, 0) === x
    )
      m = i;
  }
  return [Math.min(m, n), Math.max(m, n)];
}
