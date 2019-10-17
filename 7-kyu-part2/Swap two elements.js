/*
Description:
Return a new array that contains exactly the same numbers as the given array, but with swaped elements a and b that are included(always) in the array.

If the array has a duplicates, swap only the first one that appears in the array.
If the array has b duplicates, swap only the last one that appears in the array.
For example:

([1, 2, 3, 4], 2, 4) -> [1, 4, 3, 2]
([1, 2, 3, 4, 1, 2, 3, 4], 2, 4) -> [1, 4, 3, 4, 1, 2, 3, 2]
*/
function swapTwo(array, a, b) {
  array = array.slice();
  array[array.indexOf(a)] = b;
  array[array.lastIndexOf(b)] = a;
  return array;
}
