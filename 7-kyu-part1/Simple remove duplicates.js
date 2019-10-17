/*
Description:
In this Kata, you will remove the left-most duplicates from a array/list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
More examples can be found in the test cases.

Good luck!
*/

function solve(arr) {
  return [...new Set(arr.reverse())].reverse();
}
