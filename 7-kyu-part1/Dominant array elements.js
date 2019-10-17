/*
Description:
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included.
More examples in the test cases.

Good luck!
*/
function solve(arr){
  const arr1=[];
  for (let i=0;i<arr.length-1;i++){
    let n=arr[i]
    let arr2=arr.slice(i+1)
    let arr3=arr2.map(v=>n>v)
    if (arr3.every(v=>v===true)){arr1.push(n)}
  }
  arr1.push(arr[arr.length-1])
  return arr1
};
