/*
Description:
Challenge:

Given a multi-dimensional integer array, return the total number of integers, stored inside this array. You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.

Example:

Given [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. This is because the array contains 7 integers.

Addendum:

Think of it as dimension-agnostic value counting. We want to know the total number of integers inside the array and we don't care for the dimensions.
*/
function realSize(arrays) {
  return arrays.reduce((a, e) => (a += Array.isArray(e) ? realSize(e) : 1), 0);
}
