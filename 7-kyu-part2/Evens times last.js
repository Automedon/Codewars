/*
Description:
Given an array of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the array is empty, you should return 0.
*/
function evenLast(numbers) {
  let d =numbers.slice(-1)
  return numbers.reduce((a,b,i)=>i%2===0?a+b*d:a,0)
}
