/*
Description:
Two numbers are relatively prime if their greatest common factor is 1; in other words: if they cannot be divided by any other common numbers than 1.

13, 16, 9, 5, and 119 are all relatively prime because they share no common factors, except for 1. To see this, I will show their factorizations:

 13: 13
 16: 2 * 2 * 2 * 2
  9: 3 * 3
  5: 5
119: 17 * 7
Complete the function that takes 2 arguments: a number (n), and a list of numbers (arr). The function should return a list of all the numbers in arr that are relatively prime to n. All numbers in will be positive integers.

Examples
*/
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
function relativelyPrime(n, l) {
  return l.filter(v => gcd(n, v) === 1);
}
