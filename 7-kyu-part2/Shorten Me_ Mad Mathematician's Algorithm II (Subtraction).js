/*
Description:
Shorten Me: Mad Mathematician's Algorithm II (Subtraction)
Task
You have to write a madSub(a,b) function returning a value of a - b without - in your code.

Coding Limitation:
Less than 30 characters
Input:
a and b : integer ( 0-10000 )
*/
madSub = (a, b) => a + ~b + 1;
