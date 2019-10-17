/*
Description:
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/
function arraySum(arr) {
  return JSON.stringify(arr).match(/[0-9\.]+/g).reduce((a,b)=>a+b*1,0)
}
