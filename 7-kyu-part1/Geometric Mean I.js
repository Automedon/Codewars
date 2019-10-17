/*
For a variable, x, that may have different values, the geometric mean is defined as:

Suposse that you have to calculate the geometric mean for a research where the amount of values of x is rather small.

Implement the function geometric_meanI(), (geometricMeanI javascript)that receives an array with the different values of the variable and outputs the geometric mean value.

The negative values and strings will be discarded for the calculations.

Nevertheless if the amount of total invalid values is too high, the function will return 0 (Nothing in Haskell). The tolerance for invalid values of the variable will be as follows:

amount of entries      maximum invalid entries
  2 - 10                       1
  From 11 and above       10 % of total of entries
You do not have to round the results.
*/

function geometricMeanI(arr) {
  var gm = arr.filter(a => typeof a === "number" && a >= 0);
  if (arr.length - gm.length > 1) return 0;
  return Math.pow(gm.reduce((a, b) => a * b), 1 / gm.length);
}
