/*
Description:
Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

Example:

sort([1,3,2]) // should return [1,2,3]
*/
function sort(array) {
  if (array.length === 1) return array;
  let left = array.slice(0, array.length / 2);
  let right = array.slice(array.length / 2);
  left = sort(left);
  right = sort(right);
  return merge(left, right);
}
function merge(left, right) {
  let arr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      arr.push(right[0]);
      right.shift();
    } else {
      arr.push(left[0]);
      left.shift();
    }
  }
  while (left.length) {
    arr.push(left[0]);
    left.shift();
  }
  while (right.length) {
    arr.push(right[0]);
    right.shift();
  }
  return arr;
}
