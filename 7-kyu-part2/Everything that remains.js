/*
Description:
Given an array of items and a filter function, your task is to create a function called getRemains and have it return the values in the given array that are not being filtered out by the filter function.

For example:


  var numbers = [1, 2, 3, 4, 5];

  var filterFunc = function(val) {
    return val > 3;
  }

  var remains = getRemains(numbers, filterFunc); // [1, 2, 3]

Title of this Kata is inspired by the book "Everything that remains" by The Minimalists. Highly recommand! :)
*/
function getRemains(arr, f) {
  return arr.filter(v => !f(v));
}
