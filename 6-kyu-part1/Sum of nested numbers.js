/*
Description:
Build a function sumNestedNumbers/sum_nested_numbers that finds the sum of all numbers in a series of nested arrays raised to the power of their respective nesting levels. Numbers in the outer most array should be raised to the power of 1.

For example,

sumNestedNumbers([1, [2], 3, [4, [5]]])
should return 1 + 2*2 + 3 + 4*4 + 5*5*5 === 149
*/
function sumNestedNumbers(arr) {
  let arr1 = [];
  let flat = (arr, power = 0) => {
    power += 1;
    return arr.map(v =>
      Array.isArray(v) ? flat(v, power) : arr1.push([v, power])
    );
  };
  flat(arr);
  return arr1.map(v => Math.pow(v[0], v[1])).reduce((a, b) => a + b, 0);
}
