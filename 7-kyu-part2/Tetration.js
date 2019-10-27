/*
Description:
Multiplication can be thought of as repeated addition. Exponentiation can be thought of as repeated multiplication. "Tetration" is repeated exponentiation. Just as the 4th power of 3 is 3*3*3*3, the 4th tetration of 3 is 3^3^3^3. By convention, we insert parentheses from right to left, so the 4th tetration of 3 is 3^(3^(3^3))) = 3^(3^27) = 3^7625597484987 = a really big number.

The goal of this kata is to write a function tetration(x,y) that returns the number that is the yth tetration of x, where x is a positive integer, and y is a non-negative integer. So tetration(3,4) = 3^(3^(3^3)). The convention is that, as with exponentiation, the 0th tetration of any number is always 1.

The function should return a number, not a string that picks out the number.
*/
function tetration(x, y) {
  if (y < 1) return 1;
  let n = x;
  for (let i = 1; i < y; i++) {
    n = Math.pow(x, n);
  }
  return n;
}
