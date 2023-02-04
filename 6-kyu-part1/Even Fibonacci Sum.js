/*
Description:
Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the maximum value.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084
*/

function fibonacci(max) {
  let fib = [0, 1];
  for (let i = 1; fib[i - 1] + fib[i] < max; i++) {
    fib.push(fib[i - 1] + fib[i]);
  }
  return fib.reduce((a, b) => a + (b % 2 == 0 ? b : 0), 0);
}
