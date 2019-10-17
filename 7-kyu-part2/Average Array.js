/*
ASC Week 1 Challenge 5 (Medium #2)
Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.
For Example:
avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]); // => [3, 4, 5, 6]
avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]); // => [22.5, 11, 38.75, 38.25, 19.5]
This function should also work with negative numbers.
*/
function avgArray(arr) {
  let arr1=[];
  let tempArr=[];
  for (let i=0;i<arr[0].length;i++){
      for (let j=0;j<arr.length;j++){
        tempArr.push(arr[j][i])    
    }
        arr1.push(tempArr)
        tempArr=[]
    }
  return arr1.map(v=>v.reduce((a,b)=>a+b,0)/arr.length)
}
