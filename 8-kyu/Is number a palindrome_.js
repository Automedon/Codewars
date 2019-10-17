/*
Description:
Write a function which for given number returns true if number is palindrome or false if it is not.

A number is a palindrome if when the digits are reversed it is the same number.

Ex. 121 is a palindrome

121 -> 121

Ex. 345 is not a palindrome

345 => 543
*/
function isPalindromic(a){
  return a.toString()===a.toString().split('').reverse().join``
}
