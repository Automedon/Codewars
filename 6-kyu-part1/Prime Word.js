/*
Description:
Your task
X and Y are playing a game. A list will be provided which contains n pairs of strings and integers. They have to add the integeri to the ASCII values of the stringi characters. Then they have to check if any of the new added numbers is prime or not. If for any character of the word the added number is prime then the word will be considered as prime word.

Can you help X and Y to find the prime words?

Example:
prime_word({{"Emma",30},{"Liam",30}}) = {1,1};
For the first word "Emma" ASCII values are: 69 109 109 97
After adding 30 the values will be: 99 139 139 127
As 139 is prime number so "Emma" is a Prime Word.
*/
function primeWord(arr){
    return arr.map(v=>v[0].split``.map(x=>isPrime(x.charCodeAt()+v[1]))).map(v=>v.some(v=>v)?1:0)
}
function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}
