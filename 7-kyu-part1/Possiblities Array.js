/*
Description:
A non-empty array a of length n is called an array of all possiblities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possiblities,else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true
*/
function isAllPossibilities(x){
  x=x.sort((a,b)=>a-b);
  const arr = [];
  for (let i=0; i<=Math.max(...x); i++){
  arr.push(i)
  }
  return x.length?arr.every((v,i)=>v===x[i])&&arr.length===x.length:false
}
