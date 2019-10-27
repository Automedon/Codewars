/*
Description:
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
Task:
Write

smallest(n)
that will find the smallest positive number that is evenly divisible by all of the numbers from 1 to n (n <= 40). 
E.g

smallest(5) == 60 // 1 to 5 can all divide evenly into 60
smallest(10) == 2520
*/
let gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
let smallest = n =>
  [...Array(n)].map((_, i) => i + 1).reduce((x, y) => (x * y) / gcd(x, y), 1);
