/*
Description:
We have an array that records a game's moves, to determine a winner we need to get the last two items in the array and return in ascending order, but we need to keep the original array the way it is.

Write a function that returns the last two items in an array, in ascending order. We should still have access to the original array.

HINT: Watch out for methods that mutate the array.
*/
function lastTwo(arr) {
  return arr.slice(-2).sort((a,b)=>a-b)
}
