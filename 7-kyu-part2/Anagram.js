/*
Description:
An anagram is a word, phrase, or name formed by rearranging the letters of another, for example, spar formed from rasp. Given two strings, stringOne and stringTwo, determine if stringOne is an anagram of stringTwo. Assume that the strings contain only lowercase letters so do not worry about case-sensitivity. To improve your problem solving experience, use the suggested functions to solve the problem.

Hint: Your first task will be to convert the strings to arrays.

Concepts
Sorting, Javascript Functions(split, sort, join)

Suggested Functions

split()
stringName.split(separator)
Splits a string into an array of substrings, and returns the new array. The separator specifies how to split the string. If an empty string ('') is used as the separator (stringName.split('')) the string is split between each character. For example, 'Hello World'.split('') -> ['H','e','l','l','o', ' ', 'W', 'o', 'r', 'l', 'd']. If no separator is used, then the entire string will be returned as an array with one element. For example, 'Hello World'.split() -> ['Hello World']. Note that the split function does not change the original string so you must assign the result to a variable to keep the result.

sort()
arrayName.sort()
Sorts the elements of an array in place and returns the array. For example, ['a','c','d','b'] -> ['a','b','c','d']

join()
arrayName.join(separator)
Joins all elements of an array into a string. The separator specifies a string to separate each element of the array by. If omitted, the array elements are seperated with a comma (','). Note that the join function does not change the original array so you must assign the result to a variable to keep the result.

var arr = ['Hello', 'World'];
arr.join(); // 'Hello,World'
arr.join(''); // 'HelloWorld' 
arr.join(' '); // 'Hello World'
*/
function isAnagram(stringOne, stringTwo) {
  return stringOne.split(``).sort().join``===stringTwo.split(``).sort().join``
}
