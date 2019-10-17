/*
Description:
A function is pure when:

It always return the same value given the same arguments (it doesn't update or depend on out of the scope variables);
Evaluation of the result does not cause side effect (mutations...) or output
Task
You are given a function that is impure, and your job is to purify it.

This function must:

return a new array where each value is itself plus 2 times the "modifier"
Example:

Array = 1, 2, 3
Modifier = 5

Should return = 11, 12, 13
*/
const state = {
  modifier: 2,
};

function solution(arr, options) {
  arr=arr.slice()
  for (let i = 0; i < arr.length; ++i) {
    arr[i] += 2 * options.modifier;
  }
  return arr;
}
