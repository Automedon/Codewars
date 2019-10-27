/*
Description:
Task
Given an array of numbers, work out the Nth term of the sequence and return it as a String in the form an + b.

Input
All arrays provided will consist of 5 elements
Every array will be a sequence
All sequences provided will be linear
All sequences will start with the first element being n = 1
Examples
[1, 3, 5, 7, 9] should return 2n + -1
[1, 5, 9, 13, 17] should return 4n + -3
[11, 16, 21, 26, 31] should return 5n + 6
Note
When returning the answer, ensure that it is in the form an + b - if b is negative then it should be an + -b and not an - b.
*/
function nthTermOf(sequence) {
  let sum = sequence.reduce((a, b) => a + Math.abs(b), 0);
  let x = sequence[1] - sequence[0];
  let y = 0;
  for (let i = 1; i < Math.abs(sum); i++) {
    if (x * 6 + i === sequence[3] + x + x) {
      y = i;
      break;
    }
    if (x * 6 - i === sequence[3] + x + x) {
      y = -i;
      break;
    }
  }
  return `${x}n + ${y}`;
}
