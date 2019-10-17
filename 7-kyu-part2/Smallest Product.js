/*
Given an array of arrays, multiply the contents of each nested array and return the smallest total.

Note: all inputs will be positive integers.

Example: input [[1,5],[2]] output: 2
*/
function smallestProduct(arr) {
  return Math.min(...arr.map(v=>v.reduce((a,b)=>a*b,1)))
}
