/*
Description:
We need a function prime_bef_aft() that gives the largest prime below a certain given value n,

befPrime or bef_prime (depending on the language),

and the smallest prime larger than this value,

aftPrime/aft_prime (depending on the language).

The result should be output in a list like the following:

primeBefAft == [befPrime, aftPrime]
If n is a prime number it will give two primes, n will not be included in the result.

Let's see some cases:

primeBefAft(100) == [97, 101]

primeBefAft(97) == [89, 101]

primeBefAft(101) == [97, 103]
Range for the random tests: 1000 <= n <= 200000

(The extreme and special case n = 2 will not be considered for the tests. Thanks Blind4Basics)

Happy coding!!
*/
function primeBefAft(num) {
  let prime = [0, 0];
  for (let i = num + 1; ; i++) {
    if (isPrime(i)) {
      prime[1] = i;
      break;
    }
  }
  for (let j = num - 1; ; j--) {
    if (isPrime(j)) {
      prime[0] = j;
      return prime;
    }
  }
}
function isPrime(n) {
  let rt = Math.sqrt(n);
  for (let i = 2; i <= rt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}
