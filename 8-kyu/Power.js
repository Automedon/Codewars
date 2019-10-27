/*
Description:
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some others Math functions are disabled on final tests.
*/

function numberToPower(number, power) {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= number;
  }
  return result;
}
