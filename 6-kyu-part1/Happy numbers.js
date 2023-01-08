/*
Description:
A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers) (Wikipedia).

Write a function that takes n as parameter and return true if and only if n is an happy number, false otherwise.

Examples
For example number 7 is happy because after a number of steps the computed sequence ends up with a 1: 7, 49, 97, 130, 10, 1

While 3 is not, and would give us an infinite sequence: 3, 9, 81, 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37, 58, 89, 145, 42, 20, 4, 16, 37, ...

Happy coding!
*/

function isHappy(n) {
  for (let i = 0; i < 100; i++) {
    n = n.toString().split``.reduce((a, b) => a + b * b, 0);
  }
  return n === 1;
}
