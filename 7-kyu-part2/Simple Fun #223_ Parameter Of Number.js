/*
Description:
Task
Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.

Calculate the parameter of the given number n.

Input/Output
[input] integer n

A positive integer. It is guaranteed that no zero appears in n.

[output] an integer

The parameter of the given number.

Example
For n = 22, the output should be 4.

Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

For n = 1234, the output should be 120.

1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120
*/
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
function parameter(n) {
  let a = n
    .toString()
    .split("")
    .reduce((a, b) => a + b * 1, 0);
  let b = n
    .toString()
    .split("")
    .reduce((a, b) => a * b * 1, 1);
  return lcm(a, b);
}
