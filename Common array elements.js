/*
Description:
Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
Array lengths in random tests run from 5000 to 10000 elements.

More examples in the test cases.

Good luck!
*/
function common(...arg){
  const arr = arg.map(v=>v.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{}))
  let sum = 0
  for (let i in arr[0]){
    if (arr[0][i]&&arr[1][i]&&arr[2][i]){
      let min = Math.min(...[arr[0][i],arr[1][i],arr[2][i]])
      sum+=min*i
    }
  }
  return sum
}
