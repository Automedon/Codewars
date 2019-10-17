/*
Description:
Given an integer n, find two integers a and b such that:

A) a >= 0 and b >= 0
B) a + b = n
C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.
You will return the digitSum(a) + digitsum(b).

For example:
solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.
n will not exceed 10e10.

More examples in test cases.

Good luck!
*/

function solve(n) {
  let str = n + '',
      a = '9'.repeat(str.length - 1)*1,
      b = n - a
  return ('' + a + b).split('').reduce((c, d) => +c + +d)
}
