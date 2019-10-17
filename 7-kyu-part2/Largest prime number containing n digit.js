/*
Description:
Just as the title suggestes :D . For example ->

largest(1); //Should return 7
largest(2); //Should return 97
....
Do not mind the pattern as it is just an incident ! And make sure to return false if the input is not an integer :D This might seem simple at first, it is, but keep an eye on the performance. Go for it !
*/
var largest = (n) => {
  if (typeof n !== 'number' || n<=0) return false
  for (let i=`${9+'9'.repeat(n-1)}`*1;i>0;i--)
  {
    if (isPrime(i)) return i
  }
}
function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}
