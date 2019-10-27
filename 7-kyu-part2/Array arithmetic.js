/*
Description:
Enable arithmetic operations on arrays, where the value of an array is given by the sum of its elements. Examples:

[1,2,3] + 4 = 10
[1,1,1] - 3 = 0
['a','b'] + 'c' = 'abc'
PS: Due to intrinsic uncertainty of empty arrays, in this kata an empty array is treated as 0. For hints see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
*/
Array.prototype.valueOf = function() {
  return this.length ? this.reduce((x, y) => x + y) : 0;
};
