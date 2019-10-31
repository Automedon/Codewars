/*
Description:
In this Kata, you will be given an array of integers and your task is to return the number of arithmetic progressions of size 3 that are possible from that list. In each progression, the differences between the elements must be the same.

[1, 2, 3, 5, 7, 9] ==> 5
// [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]
All inputs will be sorted. More examples in test cases.

Good luck!
*/
function solve(arr){
  let c = 0
  for (let i=0;i<arr.length-2;i++){
    for (let j=i+1;j<arr.length-1;j++){
      for (let k=j+1;k<arr.length;k++){
        if (arr[k]-arr[j]===arr[j]-arr[i]) c++
      }
    }
  }
  return c
}
