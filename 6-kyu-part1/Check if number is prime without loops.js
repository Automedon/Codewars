/*
Description:
Return true if n is prime and false if not;

like:
  isPrime(7) == true 
  isPrime(-7) == true 
  isPrime(6) == false 
  isPrime(-6) == false 

!important: n always be integer and can be negative (but you need to handle this);

you can't use loops (for, while)
*/
function isPrime(n, i = 2, rt = Math.sqrt(n)) {
  return n % i === 0 ? false : i <= rt ? isPrime(n, (i += 1), rt) : n !== 1
}
