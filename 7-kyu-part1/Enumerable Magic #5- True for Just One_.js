/*
Description:
Create a method one? (JS one) that accepts two params, a list and a block (JS: a function), and returns true only if the block (/function) returns true for exactly one item in the array

Ruby: If you need help, here's a reference:

http://www.rubycuts.com/enum-one
*/

function one(arr, fun) {
  return arr.filter(fun).length == 1;
}
