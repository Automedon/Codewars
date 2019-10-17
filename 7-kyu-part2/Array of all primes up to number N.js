/*
Description:
Code a function which will return an array with all prime numbers smaller than or equal to an arbitrary parameter "n".

Assume that all parameters will be numbers.

Remember that in some test cases with a big enough "n", performance might be (more) important.
*/
var primeArray = function(n) {
  var primeArray = [];
  for (let i=1;i<=n;i++){
  if (isPrime(i)) primeArray.push(i)
  }
  return primeArray;
}
function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}
