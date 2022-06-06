/*
Given a number, find the permutation with the smallest absolute value (no leading zeros).

-20 => -20
-32 => -23
0 => 0
10 => 10
29394 => 23499
The input will always be an integer.
*/

const minPermutation = n => +[...n+''].sort().join('').replace(/(0+)(.)/, "$2$1")
