/*
Description:
Corner circle
A circle with radius r is placed in a right angled corner, where r is an integer and ≥ 1.

circles
What is the radius of the smaller circle, rounded to two decimal places?
*/
function cornerCircle(r) {  
  return Math.round(r * (Math.SQRT2 - 1) * (Math.SQRT2 - 1) * 100) / 100;
}
