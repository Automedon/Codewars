/*
Description:
Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

The next number that experiments this particular behaviour is 370 with the same power.

Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax that fulfill this property but with different exponents as a power for the digits.

eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

Let's see some cases:

eqSumPowdig(100, 2) ----> []

eqSumPowdig(1000, 2) ----> []

eqSumPowdig(200, 3) ----> [153]

eqSumPowdig(370, 3) ----> [153, 370]
Enjoy it !!
*/

function eqSumPowdig(hMax, exp) {
  let res = [];
  for (let i = 2; i <= hMax; i++) {
    let s = i.toString().split('').reduce((a, v) => a + Math.pow(v, exp), 0);
    if (s == i) {
      res.push(s);
    }
  }
  return res;
}
