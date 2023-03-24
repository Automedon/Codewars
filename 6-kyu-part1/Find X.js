/*
Description:
Part 2 version Find X Ⅱ

We have a function that takes in an integer n, and returns a number x.

Lets call this function findX(n)/find_x(n) (depending on your language):

function findX(n) {
  let x = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2*n; j++)
      x += i + j;
  }
  return x;
}
The functions loops throught the number n and at every iteration, performs a nested loop on 2*n, at each iteration of this nested loop it increments x with the (nested loop index + parents loop index).

This works well when the numbers are reasonably small.

findX(2) //=> 16
findX(3) //=> 63
findX(5) //=> 325
But may be slow for numbers > 103

So your task is to optimize the function findX/find_x, so it works well for large numbers.

Input Range
1 <= n <= 106 (105 in JS)

Note: This problem is more about logical reasoning than it is about finding a mathematicial formula, infact there are no complex math formula involved
*/

function findX(n) {
  return n ** 2 * (3 * n - 2);
}
