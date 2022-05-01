/*
Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.

Examples
20 and 27:

Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime
12 and 39:

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprimes
*/

function isCoprime(x, y) {
  const factorX = factors(x);
  const factorY = factors(y);
  const filtred = factorX.filter((z)=>factorY.includes(z));
  return Math.max(...filtred)===1;
}

function factors(x){
  if (x != parseInt(x, 10) || x < 1) return -1;
  return Array.from(Array(x), (x, i) => x = i+1).filter(n => !(x % n)).sort((a, b) => b - a);
}
