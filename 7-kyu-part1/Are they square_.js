/*
Description:
Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined. You can assume that all array elements will be positive integers.

Examples:

isSquare([1, 4, 9, 16]);
//returns true

isSquare([3, 4, 7, 9]);
//returns false

isSquare([]);
//returns undefined
*/
var isSquare = function(arr){
  if (arr.length===0) return undefined;
  return arr.every(v=>Math.sqrt(v).toString().length<=v.toString().length)
}
