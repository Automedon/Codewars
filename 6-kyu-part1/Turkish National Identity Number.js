/*
Description:
Every Turkish citizen has an identity number whose validity can be checked by these set of rules:

It is an 11 digit number
First digit can't be zero
Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7. Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value. Modulus 10 of the result should be equal to 10th digit.
Sum of first ten digits' modulus 10 should be equal to eleventh digit.
Example:

10167994524
//  1+1+7+9+5= 23   // "Take the sum of 1st, 3rd, 5th, 7th and 9th digit..."
//    23 * 7= 161   //  "...and multiply it by 7"
//   0+6+9+4 = 19   // "Take the sum of 2nd, 4th, 6th and 8th digits..."
// 161 - 19 = 142   // "...and subtract from first value"
// "Modulus 10 of the result should be equal to 10th digit"
10167994524
         ^ = 2 = 142 % 10
// 1+0+1+6+7+9+9+4+5+2 = 44
// "Sum of first ten digits' modulus 10 should be equal to eleventh digit"
10167994524
          ^ = 4 = 44 % 10
Your task is to write a function to check the validity of a given number. Return true or false accordingly.

Note: The input can be a string in some cases.
*/
function checkValidTrNumber(n) {
  n = n.toString();
  if (n[0] == "0" || n.length !== 11) return false;
  let step1 =
    n.split``
      .slice(0, 10)
      .filter((v, i) => i % 2 === 0)
      .reduce((a, b) => a + b * 1, 0) * 7;
  let step2 = n.split``
    .slice(0, 9)
    .filter((v, i) => i % 2 !== 0)
    .reduce((a, b) => a + b * 1, 0);
  let step3 = (step1 - step2) % 10 === n[9] * 1;
  let step4 =
    n.slice(0, 10).split``.reduce((a, b) => a + b * 1, 0) % 10 === n[10] * 1;
  return step3 && step4;
}
