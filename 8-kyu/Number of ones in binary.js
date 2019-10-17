/*
Description:
Write a function which takes a positive integer and returns the number of ones that appear in its binary representation.

For example,

ones(1); // -> 1
ones(4); // -> 1
ones(7); // -> 3
You may assume that the input is always a positive integer.
*/
function ones(n) {
  return n.toString(2).replace(/0/g,'').length
}
