/*
Description:
Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)
Examples:
13 17 31 37 71 73 are Backwards Read Primes
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task
Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

Example
backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]
*/

function backwardsPrime(start, stop) {
  var arr = [];
  for (var x = start; x <= stop; x++) {
    if (isPrime(x)) {
      if (arr.includes(x)) {
        continue;
      }
      let temp = parseInt(
        x
          .toString()
          .split("")
          .reverse()
          .join("")
      );
      if (temp != x && isPrime(temp)) {
        arr.push(x);
        arr.push(temp);
      }
    }
  }
  return arr.filter(a => a >= start && a <= stop).sort((b, c) => b - c);
}

function isPrime(n) {
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0 || n < 2) {
    return false;
  }
  var x = 5;
  var N = Math.sqrt(n);
  while (x <= N) {
    if (n % x == 0) {
      return false;
    }
    x++;
  }
  return true;
}
