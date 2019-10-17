/*
Description:
Write a function named "locate" that gets an array and value and returns true if specified value exist in a multidimentional array.

Example:

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false
*/
var locate = function(arr,value){
  let arr2=[]
  function flatten(arr){
    return arr.map((a)=>Array.isArray(a)?flatten(a):arr2.push(a.toString()))
  }
  flatten(arr)
  return arr2.some(v=>v===value.toString())
}
