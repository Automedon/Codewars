/*
Task
Initially a number 1 is written on a board. It is possible to do the following operations with it:

multiply the number by 3; increase the number by 5. Your task is to determine that using this two operations step by step, is it possible to obtain number n?

Example
For n = 1, the result should be true.

1 = 1

For n = 2, the result should be false.

For n = 3, the result should be true.

1 x 3 = 3

For n = 4, the result should be false.

For n = 5, the result should be false.

For n = 6, the result should be true.

1 + 5 = 6

For n = 18, the result should be true.

1 + 5 = 6 --> 6 x 3 = 18

For n = 32, the result should be true.

1 x 3 x 3 x 3 = 27 --> 27 + 5 = 32

For n = 100, the result should be false.

For n = 101, the result should be true.

1 + 5 + 5 + 5 ... +5 = 101

Input / Output
[input] integer n
positive integer, n ≤ 100000

[output] a boolean value
true if N can be obtained using given operations, false otherwise.
*/

const numberIncreasing = n => n % 5 !== 0 && n !== 4 && n !== 2;
