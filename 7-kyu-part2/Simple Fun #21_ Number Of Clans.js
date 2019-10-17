/*
Description:
Task
Let's call two integers A and B friends if each integer from the array divisors is either a divisor of both A and B or neither A nor B. If two integers are friends, they are said to be in the same clan. How many clans are the integers from 1 to k, inclusive, broken into?

Example
For divisors = [2, 3] and k = 6, the output should be 4

The numbers 1 and 5 are friends and form a clan, 2 and 4 are friends and form a clan, and 3 and 6 do not have friends and each is a clan by itself. So the numbers 1 through 6 are broken into 4 clans.

Input/Output
[input] integer array divisors

A non-empty array of positive integers.

Constraints: 2 ≤ divisors.length < 10, 1 ≤ divisors[i] ≤ 10.

[input] integer k

A positive integer.

Constraints: 5 ≤ k ≤ 50.

[output] an integer
*/
function numberOfClans(divisors, k) {
  const updatedDivisors = new Set(divisors);
  const clans = new Set();

  for (let i = 1; i <= k; i++) {
    let name = "";

    updatedDivisors.forEach(divisor => {
      if (i % divisor === 0) {
        name += divisor;
      }
    });

    if (!clans.has(name)) {
      clans.add(name);
    }
  }

  return clans.size;
}
