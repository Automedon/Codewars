/*
Description:
The Challenge
Write a function that takes a number and returns the number of significant figures in the given number. You can read about significant figures below.

Helpful information
the type of the given number will be string
you must return the number of significant figures as type int
no blank strings will be given
Significant Figures
What are they?
Significant Figures are the meaningful digits in a measured or computed value.

Counting significant figures
All non-zero digits are significant
4.357 has 4 significant figures
152.63 has 5 significant figures
Zeroes at the beginning of a number are not significant
0215 has 3 significant figures
0.6 has 1 significant figure
Trailing zeroes in a number with a decimal point are significant
78.200 has 5 significant figures
20.0 has 3 significant figures
Trailing zeroes in a number without a decimal point are not significant
1200 has 2 significant figures
345000 has 3 significant figures
All zeroes between significant figures are significant
90.09 has 4 significant figures
5050 has 3 significant figures
*/
function numberOfSigfigs(n) {
  n=n.replace(/^0+/,'')
  if (/\./.test(n)){
    return n.length-1    
  }
  return n.replace(/0+$/,'').length;
}
