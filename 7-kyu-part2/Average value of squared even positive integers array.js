/*
Description:
You should return the average number of the square of all even positive integers (not fractions) in the given array, rounded to the nearest integer.

e.g. for arr = [4, 5.6, -9.8, 3.14, 42, 6, 8.34] it would be [4, 42, 6], which squared is [16, 1764, 36], whose average value is 605.33, which rounded becomes 605 .

If there are no even positive integers in the array, the final result should be 0.
*/
function averageSquaredInt(arr) {
  arr = arr.filter(v => v === parseInt(v) && v % 2 === 0 && v > 0);
  return Math.round(arr.reduce((a, b) => a + b * b, 0) / arr.length) || 0;
}
