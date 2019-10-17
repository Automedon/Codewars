/*
Description:
Write a function that returns the number of '2's in the factorization of a number.
For example,

twoCount(24)
should return 3, since the factorization of 24 is 2^3 x 3

twoCount(17280)
should return 7, since the factorization of 17280 is 2^7 x 5 x 3^3
The number passed to two_count (twoCount) will always be a positive integer greater than or equal to 1.
*/

function twoCount(n) {
  let ret = 0;
  while (n % 2 === 0) {
    ret++;
    n /= 2;
  }
  return ret;
}
