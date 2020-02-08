/*
Description:
In this Kata, you will be given a number and your task will be to return the nearest prime number.

solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one. 
solve(125) = 127
We'll be testing for numbers up to 10^10. 500 tests.

More examples in test cases.

Good luck!

If you like Prime Katas, you will enjoy this Kata: Simple Prime Streaming
*/
function solve(n){
   let d = n
   while (true){
     if (isPrime(n--)) return n+1
     if (isPrime(d++)) return d-1
   }
}
    
function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}
