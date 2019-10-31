/*
Description:
Implement a function that normalizes out of range array indexes (converts them to 'in range' indexes) by making them repeatedly 'loop' around the array. The function should then return the value at that index. Indexes that are not out of range should be handled normally and indexes to empty arrays should return undefined.

For positive numbers that are out of range, they loop around starting at the beginning, so

normIndex(arr, arr.length);     //Returns first element
normIndex(arr, arr.length + 1); //Returns second element
normIndex(arr, arr.length + 2); //Returns third element
//And so on...
normIndex(arr, arr.length * 2); //Returns first element
For negative numbers, they loop starting from the end, so

normIndex(arr, -1);    //Returns last element
normIndex(arr, -2);    //Returns second to last element
normIndex(arr, -3);    //Returns third to last element
//And so on...
normIndex(arr, -arr.length); //Returns first element
*/
function normIndex(array, index){
  if (index<0){
    return array.slice().reverse()[Math.abs(index+1)%(array.length)]
  }
  return array[Math.abs(index)%(array.length)]
}
