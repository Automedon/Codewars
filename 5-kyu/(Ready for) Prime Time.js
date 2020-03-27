/*
Description:
We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example:

prime(11);
Should return an array that looks like this:

[2, 3, 5, 7, 11]
*/
function prime(num) {
  let primes = [];
  let i = 1;
  while (i <= num) {
    if (isPrime(i)) primes.push(i);
    i++;
  }
  return primes;
}

function isPrime(n) {
  let rt = Math.sqrt(n);
  for (let i = 2; i <= rt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}
