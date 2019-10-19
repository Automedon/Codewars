/*
Description:
In this Kata, you will be trained on array indexing and basic prime number operations. Array indices are zero-based; this means that the first element of an array is at index 0.

You will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

To make this interesting, array lengths in random tests will have up to 5000 elements.

Good luck!

If you like this Kata, try:

Dominant primes. It takes this idea a step further.

Consonant value
*/
function total(arr) {
  arr = arr.sort((a, b) => a - b);
  let arr2 = [];
  for (let i = 1; i < arr.length; i++) {
    if (isPrime(i)) {
      arr2.push(arr[i]);
    }
  }
  return arr2.reduce((a, b) => a + b * 1, 0);
}
function isPrime(n) {
  let rt = Math.sqrt(n);
  for (let i = 2; i <= rt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}
