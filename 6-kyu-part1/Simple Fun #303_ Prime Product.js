/*
Description:
Task
We know that some numbers can be split into two primes. ie. 5 = 2 + 3, 10 = 3 + 7. But some numbers are not. ie. 17, 27, 35, etc..

Given a positive integer n. Determine whether it can be split into two primes. If yes, return the maximum product of two primes. If not, return 0 instead.

Input/Output
[input] integer n

A positive integer.

0 ≤ n ≤ 100000

[output] an integer

The possible maximum product of two primes. or return 0 if it's impossible split into two primes.

Example
For n = 1, the output should be 0.

1 can not split into two primes

For n = 4, the output should be 4.

4 can split into two primes 2 and 2. 2 x 2 = 4

For n = 20, the output should be 91.

20 can split into two primes 7 and 13 or 3 and 17. The maximum product is 7 x 13 = 91
*/
function primeProduct(n) {
  const primes = [];
  for (let i = 1; i <= n; i++) {
    isPrime(i) ? primes.push(i) : 1;
  }
  const arr = [];
  for (let i = 0; i < primes.length; i++) {
    for (let j = i; j < primes.length; j++) {
      primes[i] + primes[j] === n ? arr.push([primes[i], primes[j]]) : 1;
    }
  }
  let pair = arr
    .sort((a, b) => a.reduce((a, b) => a * b, 1) - b.reduce((a, b) => a * b, 1))
    .slice(-1);
  return pair[0] ? pair[0].reduce((a, b) => a * b, 1) : 0;
}
function isPrime(n) {
  let rt = Math.sqrt(n);
  for (let i = 2; i <= rt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}
