/*
Description:
Comparing two numbers written in index form like 2^11 and 3^7 is not difficult, as any calculator would confirm that 2^11 = 2048 < 3^7 = 2187.

However, confirming that 632382^518061 > 519432^525806 would be much more difficult, as both numbers contain over three million digits.

Your task is to write a function that takes two arrays (or two tuples in Python) in the form of [base, exponent] where base and exponent are positive integers, and return the largest of the two pairs of numbers.

Inspired by Project Euler #99
*/
function compare(...arr) {
  let largestSize = 0, largestLine = 0;
  for (let i = 0; i < arr.length; i++)
  {
    let size = arr[i][1] * Math.log(arr[i][0]);
    if (size > largestSize)
    {
      largestSize = size;
      largestLine = i + 1;
    }
  }
  return arr[largestLine-1];
}
