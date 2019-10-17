/*
Description:
Task
You need to implement two functions, xor and or, that replicate the behaviour of their respective operators:

xor = Takes 2 values and returns true if, and only if, one of them is truthy.
or = Takes 2 values and returns true if either one of them is truthy.
When doing so, you cannot use the or operator:
||
.

Input
Not all input will be booleans - there will be truthy and falsey values [the latter including also empty strings and empty arrays]
There will always be 2 values provided
Examples
xor(true, true) should return false
xor(false, true) should return true
or(true, false) should return true
or(false, false) should return false
*/
const or = (a, b) => {
  a = Boolean(a);
  b = Boolean(b);
  if (a === false && b == false) return false;
  if (a === true && b == false) return true;
  if (a === false && b == true) return true;
  if (a === true && b == true) return true;
};

const xor = (a, b) => {
  a = Boolean(a);
  b = Boolean(b);
  if (a === false && b == false) return false;
  if (a === true && b == false) return true;
  if (a === false && b == true) return true;
  if (a === true && b == true) return false;
};
