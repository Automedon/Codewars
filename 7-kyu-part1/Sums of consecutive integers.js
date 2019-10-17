/*
Description:
The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

// Javascript
position(4, 14, 3) => 5`

// C#
SumOfConsecutiveIntegers.Position(4, 14, 3) => 5
Assume there will always be a sum of x consecutive integers that totals to y and n will never be indexed out of bounds.
*/

function position(x, y, n) {
  return y / x - (x - 1) / 2 + n;
}
