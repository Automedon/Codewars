/*
Description:
Given an input string determine whether or not it is a Palindrome (e.g. "racecar") by returning a boolean response. A true\1 response indicates the input is a valid Palindrome.

Ignore whitespace, special characters, and case.
*/
function isPalindrome(str){
  str=str.toLowerCase().replace(/[^a-z]/g,'');
  return str===str.split(``).reverse().join``
}
