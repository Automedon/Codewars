/*Description:
Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == false
*/

function arr2bin(arr) {
  if (arr.filter(v => typeof v != "number").length > 0) return false;
  return arr.reduce((a, b) => a + b, 0).toString(2);
}
