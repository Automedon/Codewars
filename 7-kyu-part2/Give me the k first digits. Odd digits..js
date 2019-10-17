/*
Description:
You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.

The output should also be an integer.

In the following cases a function should return 0:

there are no odd digits in a number n;
k is bigger than a number of digits in n;
k = 0;
k is bigger than a number of odd digits in n.
BTW, is 0 an odd number or an even one?
*/
function findOddDigits(n, k) {
  let str = n.toString().replace(/[24860]/g, "");
  return str.length < k ? 0 : str.slice(0, k) * 1;
}
