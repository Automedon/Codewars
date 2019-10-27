/*
Description:
Given two arrays, interweave them by alternating an element form the array and then one from the second array;

[4, 5, 6] [1, 2, 3] => [4, 1, 5, 2, 6, 3]
The arrays can be of any length, and contain any data type.

Ex.

[1,2,3] [4] => [1,4,2,3]
[1] [2,3,4] => [1,2,3,4]
*/
function interweave(a, a2) {
  let arr = [];
  let l = Math.max(a.slice().length, a2.slice().length);
  for (let i = 0; i < l; i++) {
    if (a.length > 0) {
      arr.push(a.shift());
    }
    if (a2.length > 0) {
      arr.push(a2.shift());
    }
  }
  return arr;
}
