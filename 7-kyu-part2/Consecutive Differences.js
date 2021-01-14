/*
Description:
Given a list of integers, find the positive difference between each consecutive pair of numbers, and put this into a new list of differences. Then, find the differences between consecutive pairs in this new list, and repeat until the list has a length of 1. Then, return the single value.

The list will only contain integers, and will not be empty.

For example:

differences([1, 2, 3]) => [1, 1] => [0] -> 0
differences([1, 5, 2, 7, 8, 9, 0]) => [4, 3, 5, 1, 1, 9] => [1, 2, 4, 0, 8] => .. => 1
differences([2, 3, 1]) => [1, 2] => [1] => 1
*/
function differences(a) {
  while (a.length > 1){
    for (let i = 0; i < a.length-1; i++){
       a[i] = Math.abs(a[i] - a[i+1])
    }
    a.pop()
  }
  return a[0];
}
