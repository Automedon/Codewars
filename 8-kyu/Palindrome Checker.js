/*
Description:
Palindrome: A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.

Write a function that accepts a string as an argument and will return true if the string is a palindrome. It should return false if the string is NOT a palindrome. The argument passed through the function will always be a string.

Your function should be able to return true even if there is a capital letter in the string.

Example: palindromeChecker('Bob') returns true.
*/
var palindromeChecker = function(string) {
  return string.toLowerCase()===[...string].reverse().join``.toLowerCase()
}
