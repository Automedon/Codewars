/*
Description:
Spin-off of this kata, here you will have to figure out an efficient strategy to solve the problem of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.

Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates that can run in O(n²) time won't work.
*/
var findDup=function(arr){
  return arr.sort((a,b)=>a-b).filter((v,i,arr)=>v===arr[i+1])*1;
}
