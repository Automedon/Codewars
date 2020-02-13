/*
Description:
Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.
*/
function smartSum(...n){
  return n.join` `.match(/\d+/g).reduce((a,b)=>a+b*1,0) 
}
