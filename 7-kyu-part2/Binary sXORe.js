/*
Description:
##Objective

Given a number n we will define it's sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

Write a function that takes n and returns it's sXORe.

####Examples | n | sXORe n |---------|--------
| 0 | 0 | 1 | 1 | 50 | 51

| 1000000 | 1000000
Any feedback would be much appreciated
*/
const sxore = n => [n, 1, n + 1, 0][n % 4];
