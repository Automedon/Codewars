/*
Description:
Description
Given a number n, you should find a set of numbers for which the sum equals n. This set must consist exclusively of values that are a power of 2 (eg: 2^0 => 1, 2^1 => 2, 2^2 => 4, ...).

The function powers takes a single parameter, the number n, and should return an array of unique numbers.

Criteria
The function will always receive a valid input: any positive integer between 1 and the max integer value for your language (eg: for JavaScript this would be 9007199254740991 otherwise known as Number.MAX_SAFE_INTEGER).

The function should return an array of numbers that are a power of 2 (2^x = y).

Each member of the returned array should be unique. (eg: the valid answer for powers(2) is [2], not [1, 1])

Members should be sorted in ascending order (small -> large). (eg: the valid answer for powers(6) is [2, 4], not [4, 2])
*/
const powers = n =>n.toString(2).split('').reverse().map((v,i) => +v ? 2 ** i : 0).filter(a => a);
