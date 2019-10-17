/*
Description:
You will be given a string.

You need to return an array of three strings by gradually pulling apart the string.

You should repeat the following steps until the string length is 1:

a) remove the final character from the original string, add to solution string 1. b) remove the first character from the original string, add to solution string 2.

The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

Example:

"exampletesthere" becomes: ["erehtse","example","t"]

The Kata title gives a hint of one technique to solve.
*/

function popShift(s){
  let arr=[];
  let arr1=[];
  let z=s.slice().split('')
  for (let i=0;i<s.length;i++){
  if (z.length===1) {break}
  arr.push(z.pop())
  arr1.push(z.shift())
  }
  return [arr.join(''),arr1.join(''),z.join()]
}
