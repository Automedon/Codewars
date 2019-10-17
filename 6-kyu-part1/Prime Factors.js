/*
Description:
Prime Factors
Inspired by one of Uncle Bob's TDD Kata

Write a function that generates factors for a given number.

The function takes an integer on the standard input and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

Examples
1  ==>  []
3  ==>  [3]
8  ==>  [2, 2, 2]
9  ==>  [3, 3]
12 ==>  [2, 2, 3]
*/
const prime_factors = n => {
  const factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i == 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}
