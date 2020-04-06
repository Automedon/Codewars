/*
Description:
Given the following table 'decimals':

** decimals table schema **

id
number1
number2
Return a table with two columns (cuberoot, logarithm) where the values in cuberoot are the cube root of those provided in number1 and the values in logarithm are changed to the natural logarithm of those in number2.
*/
SELECT cbrt(number1) as cuberoot, ln(number2) as logarithm FROM decimals;
