/*
Description:
We want to define the location x, y of a point on a two-dimensional plane where x and y are positive integers.

Our definition of such a point will return a function (procedure). There are several possible functions to do that.

Possible form of point:

const point = (a, b) => {
  // your code
};
typeof(point(a, b)) === "function"
Of course we need to be able to extract from our point the two coordinates x and y.

The function fst must return the first element x and our function snd must return the second element y.

We will also write a function sqr-dist which returns the square of the distance between two points point1 and point2.

Last function to write line:

Given two points foo and bar this function return a list (l m n) or [l, m, n] where l, m, n are the coefficients in the general equation l*x + m*y + n = 0 (1) of the straight line through the points foo and bar.

Equation k*l*x + k*m*y + k*n = 0 is equivalent to (1) and the tests consider that they define the "same" line.

Examples: See "Sample Tests".
 foo = point(3, 5)
 typeof(point(3, 5)) === "function" -> true
 fst(foo) -> 3
 snd(foo) -> 5
 sqr-dist(point(22, 55), point(75, 66)) -> 2930
 line(point(20, 22), point(29, 10)) -> [12, 9, -438] ([4, 3, -146] is a good answer too)
Note:
Please ask before translating: some translations are already written and published when/if the kata is approved.
*/
const point = (a, b) => {
  return function() {
    return {a, b}
  };
};
const fst = (pt) => {
  return pt().a;
};
const snd = (pt) => {
  return pt().b;
};
const sqrDist = (pt1, pt2) => {
  const a = pt1().a - pt2().a;
  const b = pt1().b - pt2().b;
  
  return a * a + b * b;
};
const line = (pt1, pt2) => {
  return [
    pt1().b - pt2().b,
    pt2().a - pt1().a,
    pt1().a * pt2().b - pt2().a * pt1().b,    
  ];
};
