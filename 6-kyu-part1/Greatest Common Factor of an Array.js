/*
Write a function that returns the greatest common factor of an array of positive integers. Your return value should be a number, you will only receive positive integers.

greatestCommonFactor([46, 14, 20, 88]); // --> 2
*/

function greatestCommonFactor(ar){
  const gcf = (a,b) => !b ? a : gcf(b, a%b);
  return ar.reduce((a,e) => gcf(a,e));
}
