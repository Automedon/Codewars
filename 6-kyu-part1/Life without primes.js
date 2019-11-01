/*
Description:
Consider an array that has no prime numbers, and none of its elements has any prime digit. It would start with: [1,4,6,8,9,10,14,16,18,..]. The element at index 1 is 4.

12 and 15 are not in the list because 2 and 5 are primes.

You will be given an integer n and your task will be return the number at that index in the array. For example, solve(1) = 4, as explained above.

More examples in the test cases.

Good luck!

If you like Prime Katas, you will enjoy this Kata: Simple Prime Streaming
*/
function solve(n) {
 let arr = []
 for (let i=1;arr.length!==n+1;i++){
   let str = i.toString()
   if (!isPrime(i)&&str.split``.every(v=>v==0?true:!isPrime(v*1))){
     arr.push(i)
   }
 }
 return arr[n]
};
function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}
