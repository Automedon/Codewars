/*
Description:
A "Perfect Number" is a number in which the sum of its factors (excluding itself) are equal to itself.

Write a function that can verify if the given integer is a perfect number.

Example
28 has the following factors: 1, 2, 4, 7, 14

1 + 2 + 4 + 7 + 14 = 28 therefore 28 is a perfect number!
*/
function isPerfect(n) {
  return [6, 28, 496, 8128, 33550336, 8589869056, 137438691328].includes(n);
}
