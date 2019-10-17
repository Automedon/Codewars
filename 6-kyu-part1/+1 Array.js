/*
Description:
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/
function upArray(arr){
  if (!arr.every(v=>v>=0)||arr.length===0) return null
  if (arr.some(v=>v.toString().length>1)) return null
  let arr1 =[];
  for (let i=0;i<arr.length;i+=15){
  arr1.push(arr.slice(i,i+15))
  }
  arr1[arr1.length-1]= arr1[arr1.length-1].join('')*1+1
  arr1=arr1.map(v=>Array.isArray(v)?v.join('')*1:v)
  return (arr1.join('')).split('').map(v=>v*1)
}
