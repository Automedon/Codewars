/*
Description:
A Madhav array has the following property:

a[0] = a[1] + a[2] = a[3] + a[4] + a[5] = a[6] + a[7] + a[8] + a[9] = ...

Complete the function/method that returns true if the given array is a Madhav array, otherwise it returns false.

Edge cases: An array of length 0 or 1 should not be considered a Madhav array as there is nothing to compare.
*/
function isMadhavArray(arr){
  if (arr.length<=1) return false
  let a = []
  let k = 0
  let count = 0
  let length = arr.slice().length
  for (let i=1;i<=arr.length;i++){
    a.push(arr.slice(0,i).reduce((a,b)=>a+b,0))
    k=i
    count+=i
    while(k){
      k--
      arr.shift()
    }
  }
  return a.every(v=>v===a[0])&&count===length
 }
