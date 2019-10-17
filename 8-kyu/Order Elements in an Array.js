/*
Description:
Write a function order() which takes as input an array of strings and returns an array of the same strings in alphabetical order. For example, order(['tomato', 'apple', 'squash']) would return ['apple', 'squash', 'tomato'].
*/
function order(array) {
  return array.sort((a,b)=>a.localeCompare(b))
}
