/*
Description:
Task
Define the permutation element shift as the difference between the element's value and its index. For example, for permutation [1, 0, 2, 3] of array [0, 1, 2, 3] shifts for the respective elements are [1, -1, 0, 0].

Define the permutation shift as the difference between the maximal and the minimal element shifts among all of the permutation elements.

Given a permutation of integers from 0 to n - 1 for some integer n, find its shift.

Input/Output
[input] integer array permutation

Array of integers containing each integer from 0 to n - 1, inclusive, exactly once (where n is the array length).

1 ≤ permutation.length ≤ 100

[output] an integer

Example
For permutation = [1, 0, 2, 3], the output should be 2.

Its maximal and the minimal element shifts are 1 and -1, so the output is 1 - -1 = 2.
*/
function permutationShift(permutation) {
  for (let i = 0; i < permutation.length; i++) {
    permutation[i] = permutation[i] - i;
  }
  return Math.max(...permutation) - Math.min(...permutation);
}
