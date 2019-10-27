/*
Description:
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

function primeFactors(n) {
  for (var s = "", d = 2; n > 1; d++) {
    for (var k = 0; n % d == 0; k++, n /= d);
    s += k ? (k == 1 ? `(${d})` : `(${d}**${k})`) : "";
  }
  return s;
}
