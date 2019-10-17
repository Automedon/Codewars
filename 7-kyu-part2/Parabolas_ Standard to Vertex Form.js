/*
Description:
There are two main ways to write out a quadratic function, standard form: f(x) = a(x^2)+bx+c and vertex form:
f(x) = a((x-h)^2) + k (where (h,k) are the coordinates of the vertex of the parabola).

Your Task
is to write a function getVertex that takes three parameters a, b, and c and returns an array of two numbers [h,k] such that a(x^2)+bx+c = a((x-h)^2) + k.

Note: Make sure it works for a values other than 1.
*/
function getVertex(a, b, c) {
  let h = -b / (2 * a),
    k = c - a * h * h;
  return [h, k];
}
