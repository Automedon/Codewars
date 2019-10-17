/*
Description:
Introduction to conjunctions
In logic and mathematics, a conjunction is an operation on 2 or more propositions. A conjunction is true if and only if all of its operands are true. In programming, we typically denote a conjunction using "&&", but in logic we typically use "^".

Example of conjunction:

p = 1 < 2 = true
q = 2 < 3 = true
therefore p ^ q is true
In a programming language, we might write this as:

var p = 1 < 2;        //true
var q = 2 < 3;        //true
var result = p && q;  //true
Directions:
For this kata, your task is to implement a function that performs a conjunction operation on 2 or more propositions.

Should take a boolean array as its only parameter. Array values can be assumed to be non-null.
Should return true if and only if the value of every operand is true (i.e. every item in the passed array is true).
*/
function conjunction(operands) {
  return operands.every(v=>v===true)
}
