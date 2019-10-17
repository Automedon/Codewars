/*
Description:
The aim of the kata is to decompose n! (factorial n) into its prime factors.

Examples:

n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

Notes

the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
factorial can be a very big number (4000! has 12674 digits, n will go from 300 to 4000).
In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
*/
function decomp(n) {
  function isPrime(num) {
    if (num % 2 == 0 || num % 3 == 0) {
      return false;
    }
    var d = 5;
    while (d <= Math.sqrt(num)) {
      if (num % d == 0 || num % (d + 2) == 0) {
        return false;
      } else {
        d += 6;
      }
    }
    return true;
  }
  let primes = [2, 3];
  let k = 5;
  while (k <= n) {
    if (isPrime(k)) {
      primes.push(k);
    }
    k += 2;
  }
  let factor_string = "";
  for (let i = 0; i < primes.length; i++) {
    let N = n;
    let index = n;
    while (N > 0) {
      index -= N % primes[i];
      N = (N - (N % primes[i]))/primes[i];
    }
    index /= primes[i] - 1;
    (index > 1) ? factor_string += primes[i] + "^" + index + " * " : factor_string += primes[i] + " * ";
  }
  return factor_string.slice(0, factor_string.length - 3);
}
