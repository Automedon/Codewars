/*
Description:
Your task is to count all the combinations of numbers in an array whose sum equals the number passed into the second parameter in the arguments of the function. The combination length will be limited to all combinations which are exactly one less than the length of the array. If the array is [2, 0, 0, 0, 1] only count the combinations of four numbers.

Example: 
numCombo([2, 0, 0, 0, 1], 2) // 1

The answer for the above example is 1 combination (2,0,0,0) of four numbers when summed (2 + 0 + 0 + 0) equals 2.

More Examples: 
numCombo([2, 0, 0, 0, 1], 1)// 1 
numCombo([2, 0, 0, 0, 1], 3)// 3 
numCombo([0, 0, 0, 0, 0], 0)// 5 
*/
function numCombo(arr, num) {
  let sum = arr.reduce((a, b) => a + b);
  return arr.filter(x => sum - x === num).length;
}
