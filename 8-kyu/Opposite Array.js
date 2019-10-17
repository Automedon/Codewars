/*
Description:
Given an array of numbers, create a function called oppositeArray* that returns an array of numbers that are the additive inverse (opposite or negated) of the original. If the original array is empty, return it.

* Ruby/Python: function name will be opposite_list
*/
function oppositeArray(numbers) {
  return numbers.map(v=>v*-1)
}
