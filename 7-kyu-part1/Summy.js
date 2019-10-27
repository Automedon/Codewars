/*
Description:
Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

Example
summy("1 2 3")  ==> 6
Good luck!
*/

function summy(stringOfInts) {
  return stringOfInts.split(" ").reduce((acc, cur) => acc + parseFloat(cur), 0);
}
