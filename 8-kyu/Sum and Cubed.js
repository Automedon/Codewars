/*
Function should be able to take an array of integers, cube them and return their sum. Non-numeric array values should return undefined. Your solution should return [] if all values in the array are not numbers.

It is assumed that the array contains 3 non-Null values.
*/
function cubeAndSum(arr) {
  if (arr.every(v=>typeof v==='string')) return '[]'
  if (arr.some(v=>typeof v==='string')) return 
  return arr.reduce((a,b)=>a+(b*b*b),0);
}
