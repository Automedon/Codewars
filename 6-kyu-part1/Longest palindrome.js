/*
Description:
A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba".
*/
function longestPalindrome(str) {
  str=str.toLowerCase().replace(/[^a-z0-9]/g,'')
  let dict = str.split``.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  let a = []
  let once = true
  for (let i in dict){
    if (dict[i]%2===0){
     a.push(dict[i])
    }
    if (dict[i]===1&&once){
     once=false
     a.push(1)
    }
    if (dict[i]%2!==0&&dict[i]!==1){
     a.push(dict[i]-1)
    }
  }
  return a.reduce((a,b)=>a+b,0)
}
