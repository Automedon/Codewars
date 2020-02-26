/*
Description:
Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:

the first two digits of 1176 form a prime.
the first two digits of the square 1382976 also form a prime.
the last two digits of 1176 and 1382976 are the same.
Given two numbers representing a range (a, b), how many numbers satisfy this property within that range? (a <= n < b)

Example
solve(2, 1200) = 1, because only 1176 satisfies this property within the range 2 <= n < 1200. See test cases for more examples. The upper bound for the range will not exceed 1,000,000.

Good luck!
*/
function solve(a, b) {
  let n = 0  
  for (let i=b;i>=a;i--){
    let x = (i).toString()
    let y = (i*i).toString()
    if (x.slice(-2)!==y.slice(-2)) continue
    if (!isPrime(x.slice(0,2)*1)) continue
    if (!isPrime(y.slice(0,2)*1)) continue
    n++
  }
return n;
}
function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}
