/*
Description:
Problem
In China，there is an ancient mathematical book, called "The Mathematical Classic of Sun Zi"(《孙子算经》). In the book, there is a classic math problem: “今有物不知其数，三三数之剩二，五五数之剩三，七七数之剩二，问物几何？”

Ahh, Sorry. I forgot that you don't know Chinese. Let's translate it to English:

There is a unkown positive integer n. We know:

n % 3 = 2, and n % 5 = 3, and n % 7 = 2.

What's the minimum possible positive integer n?

The correct answer is 23.

Task
You are given three non-negative integers x,y,z. They represent the remainders of the unknown positive integer n divided by 3,5,7.

That is: n % 3 = x, n % 5 = y, n % 7 = z

Your task is to find the minimum possible positive integer n and return it.

Example
For x = 2, y = 3, z = 2, the output should be 23

23 % 3 = 2, 23 % 5 = 3, 23 % 7 = 2

For x = 1, y = 2, z = 3, the output should be 52

52 % 3 = 1, 52 % 5 = 2, 52 % 7 = 3

For x = 1, y = 3, z = 5, the output should be 103

103 % 3 = 1, 103 % 5 = 3, 103 % 7 = 5

For x = 0, y = 0, z = 0, the output should be 105

For x = 1, y = 1, z = 1, the output should be 1

Note
0 <= x < 3, 0 <= y < 5, 0 <= z < 7

Happy Coding ^_^
*/
function findUnknowNumber(x, y, z) {
  for (let i = 1; ; i++) {
    if (i % 3 === x && i % 5 === y && i % 7 === z) return i;
  }
}
