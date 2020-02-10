/*
Description:
Task
Given a string str, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example
For str = "abcdc", the output should be "abcdcba".

Input/Output
[input] string str

A string consisting of lowercase latin letters.

Constraints: 3 ≤ str.length ≤ 10.

[output] a string
*/
function buildPalindrome(str) {
  if (str === str.split``.reverse().join``) return str
  for  (let i=1;i<=str.length;i++){
    let test = str+str.split``.reverse().slice(-i).join``
    if (test === test.split``.reverse().join``) return test
  }
}
