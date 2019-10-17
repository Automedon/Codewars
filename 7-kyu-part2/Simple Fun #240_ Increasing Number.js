/*
Description:
Task
You are given a positive integer x and you should perform n operations, where on the ith operation you increase x in such a way that its new value is divisible by i (operations are numbered from 1 to n).

Your task is to find the minimal value of x you can obtain by performing n operations described above.

Input/Output
[input] integer x

Starting positive integer.

1 ≤ x ≤ 15.

[input] integer n

The number of operations.

2 ≤ n ≤ 100.

[output] an integer

The minimal possible value you can obtain after the described operations.

Example

For x = 9 and n = 5, the output should be 15.

x=9 and n=5 means number starting from 9 and do increase operation 5 times.

In each ith operation, x should increase to a multiple of i.

5 times operation:

x starting from 9
1st operation: 9 is already a multiple of 1, no need increase anymore.
2nd operation: increase x to 10, which is a multiple of 2.
3rd operation: increase x to 12, which is a multiple of 3.
4th operation: 12 is already a multiple of 4.
5th operation: increase x to 15, which is a multiple of 5.
*/
function increasingNumber(x, n) {
  for (let i=1;i<=n;i++){
  while (x%i!==0){
   x++
    }
  }
  return x
}
