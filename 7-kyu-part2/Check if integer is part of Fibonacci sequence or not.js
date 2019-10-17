/*
Description:
Given a integer value, check if it is part of the Fibonacci sequence.

Examples:

Given value 2, returns true

Given value 4, returns false
*/
function isPartOfFibonacciSequence(input) {
  let arr = [1, 1];
  for (let i = 1; ; i++) {
    if (arr[i] === input) return true;
    if (arr[i] > input) return false;
    arr.push(arr[i - 1] + arr[i]);
  }
}
