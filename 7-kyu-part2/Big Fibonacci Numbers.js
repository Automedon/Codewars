/*
Description:
In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, called the Fibonacci sequence, and characterized by the fact that every number in it is the sum of the two preceding ones:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
Implement function getFibonacci(n) which will return the string representation of number on n position on Fibonacci sequence.

Where n satisfies the following conditions:

n is Integer value
0 < n <= 2000
and

getFibonacci(other n values) = '-1'
*/
function getFibonacci(n) {
  let arr = ["1", "1"];
  for (let i = 1; i < n; i++) {
    arr.push(add(arr[i - 1], arr[i]));
  }
  return arr[n - 1];
}
function add(a, b) {
  var res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}
