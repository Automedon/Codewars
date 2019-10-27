/*
Description:
Shorten Me: Mad Mathematician's Algorithm V (Modulus)
Task
You have to write a madMod(a,b) function returning a value of a % b without % in your code.

Coding Limitation:
Less than 35 characters
Input:
a and b : integer ( 0-10000 )
*/
madMod = f = (a, b) => (b ? a - ~~(a / b) * b : NaN);
