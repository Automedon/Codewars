/*
Description:
For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2
*/
function oddNotPrime(n) {
  const neg = [];
  for (let i = 1; i <= n; i += 2) {
    neg.push(i);
  }
  const prime = [];
  for (let i = 0; i <= neg.length; i++) {
    if (!isPrime(neg[i])) {
      prime.push(neg[i]);
    }
  }
  return prime.length;
}

function isPrime(n) {
  let rt = Math.sqrt(n);
  for (let i = 2; i <= rt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}
