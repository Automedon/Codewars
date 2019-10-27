/*
Description:
Task
Your task is to find the sum for the range 0 ... m for all powers from `0 ... n.

Example
For m = 2, n = 3, the result should be 20

0^0+1^0+2^0 + 0^1+1^1+2^1 + 0^2+1^2+2^2 + 0^3+1^3+2^3 = 20

Note, that no output ever exceeds 2e9.

Input/Output
[input] integer m

0 <= m <= 50000

[input] integer n

0 <= n <= 9

[output] an integer(double in C#)

The sum value.
*/
function S2N(m, n) {
  let arr1 = Array.from({ length: m + 1 }, (x, i) => i);
  let arr = [];
  let tempArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j <= n; j++) {
      tempArr.push(Math.pow(i, j));
    }
    arr.push(tempArr);
  }
  return arr[arr.length - 1].reduce((a, b) => a + b, 0);
}
