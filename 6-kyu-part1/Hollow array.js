/*
Description:
An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.
*/
function isHollow(x){
  if (x.filter(v=>v===0).length<3) return false
  if (x.every(v=>v===0)) return true
  if (x[0]===0||x[x.length-1]===0) return false
  let start = false
  if (x.indexOf(0)!==x.length-1-x.lastIndexOf(0)) return false
  for (let i=x.indexOf(0),j=x.lastIndexOf(0);i<x.lastIndexOf(0);i++,j--){
    if ((x[i]===0||x[j]===0)&&!start) start=true
    if (start&&(x[i]!==0||x[j]!==0)) return false
  }
  return true
}
