/*
Description:
In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

See test cases for more examples.

Good luck!
*/
function solve(a,b){
  if (a<=2) return b%a==0
  if (a.toString()===b.toString().slice(0,a.toString().length)&&a.toString().split``.reverse()[0]!=0) return false
  if (a%2===0&&b%2===0||a%2!==0&&b%2!==0) return true
  return false
};
