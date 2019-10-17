/*
Description:
You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.
*/
function twins(myArray) {
  return myArray.every(v => myArray.filter(x => x == v).length === 2);
}
