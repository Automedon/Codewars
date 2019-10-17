/*
Description:
Your task is to take a given range and return an array of the prime numbers in that range.

You will write a function with the following parameters:

start is the integer from which your range starts.

end is the integer at which your range ends.

If the range does not contain any prime numbers return null.

Examples:

primes(5, 7)  // [5, 7]
primes(8, 9)  // null
primes(1, 10) // [2, 3, 5, 7]
You can assume that parameters numbers will be positive integers and that the start of the range will be less than the end of the range.
*/
function primes(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) arr.push(i);
  }
  return arr.length > 0 ? arr : null;
}

function isPrime(n) {
  let rt = Math.sqrt(n);
  for (let i = 2; i <= rt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}
