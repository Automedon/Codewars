/*
Description:
Task
Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

Example
[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []
*/

function onesCounter(input) {
  const arr = [];
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i]) {
      count += 1;
    } else {
      if (count) {
        arr.push(count);
      }
      count = 0;
    }
  }
  if (count) {
    arr.push(count);
  }
  return arr;
}
