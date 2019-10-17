/*
Description:
Given an 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5], // minimum value of row is 1
  [5, 6, 7, 8, 9], // minimum value of row is 5
  [20, 21, 34, 56, 100] // minimum value of row is 20
]
So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

Note: You will be always given non-empty array containing Positive values.

ENJOY CODING :)
*/
function sumOfMinimums(arr) {
  return arr.map(v => Math.min(...v)).reduce((a, b) => a + b, 0);
}
