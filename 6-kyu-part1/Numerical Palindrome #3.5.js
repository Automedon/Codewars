/*
Description:
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: 2332, 110011, 54322345

For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.

If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.

Examples
palindrome(1221)      =>  [22, 1221]
palindrome(34322122)  =>  [22, 212, 343, 22122]
palindrome(1001331)   =>  [33, 1001, 1331]
palindrome(1294)      =>  "No palindromes found"
palindrome("1221")    =>  "Not valid"
*/
function palindrome(num){ 
  let str = num.toString()
  if (num<=0) return "Not valid"
  if (typeof num !=='number') return "Not valid"
  let arr = []
  for (let i=0;i<str.length;i++){
    for (let j=0;j<=str.length;j++){
      if (str.slice(i,j).length>1&&str.slice(i,j)===str.slice(i,j).split``.reverse().join``) arr.push(str.slice(i,j)*1)
    }
  }
  arr = [...new Set(arr.sort((a,b)=>a-b))].filter(v=>v!==0).filter(v=>v%10!==0)
  if (arr.length===0) return "No palindromes found"
  return arr
}
