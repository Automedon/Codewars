/*
Description:
Introduction to Disjunctions
In logic and mathematics, a disjunction is an operation on 2 or more propositions. A disjunction is true if and only if 1 or more of its operands is true. In programming, we typically denote a disjunction using "||", but in logic we typically use "v".

Example of disjunction:

p = 1 > 2 = false
q = 2 < 3 = true
therefore p v q is true
In a programming language, we might write this as:

var p = 1 > 2;        // false
var q = 2 < 3;        // true
var result = p || q;  // true
The above example demonstrates an inclusive disjunction (meaning it includes cases where both operands are true). Disjunctions can also be exlusive. An exclusive disjunction is typically represented by "⊻" and is true if and only if both operands have opposite values.

p = 1 < 2 = true
q = 2 < 3 = true
therefore p ⊻ q is false
This can become confusing when dealing with more than 2 operands.

r = 3 < 4 = true
p ⊻ q ⊻ r = ???
We handle these situations by evaluating the expression from left to right.

p ⊻ q = false
(p ⊻ q) ⊻ r = true
Directions:
For this kata, your task is to implement a function that performs a disjunction operation on 2 or more propositions.

Should take a boolean array as its first parameter and a single boolean as its second parameter, which, if true, should indicate that the disjunction should be exclusive as opposed to inclusive.
Should return true or false.
*/
function disjunction(operands, isExclusive) {
    return !isExclusive?true:operands.reduce( ( x, y ) => y == !x );
}
