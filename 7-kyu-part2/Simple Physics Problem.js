/*
Description:
This just a simple physics problem:

A race car accelerates uniformly from 18.5 m/s to 46.1 m/s in 2.47 seconds. Determine the acceleration of the car and the distance traveled.

Create a function solveit(vi, vf, t) that takes in all three values and outputs a list of acceleration and distance in format [acceleration, distance].

Formula used:

a = (vf-vi)/t
d = vi*t + 0.5*a*(t**2)
If vi > vf then it should return empty list. The solution must be rounded off to double decimal place. Example: [11.17, 79.78]
*/
function solveIt(vi, vf, t) {
  let a = (vf - vi) / t;
  let d = vi * t + 0.5 * a * t ** 2;
  if (a < 0) return [];
  return [a.toFixed(2) * 1, d.toFixed(2) * 1];
}
