/*
Description:
In this kata the function returns an array/list like the one passed to it but with its nth element removed (with 0 <= n <= array/list.length - 1). The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Good luck!

Some good reading: MDN Docs about arrays
*/

function removeNthElement(arr, n) {
  var arrCopy = arr.slice();
  arrCopy.splice(n, 1); // removes the nth element
  return arrCopy;
}
