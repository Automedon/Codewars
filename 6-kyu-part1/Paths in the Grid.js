/*
Description:
Paths in the Grid
You have a grid with m rows and n columns.
Return number of ways that you can start from point A to reach point B.
you are only allowed to move right and up.

alt text

In the picture, there are 10 pathes from A to B.

Hint: Use mathematical permutation and combination
*/
function numberOfRoutes(m, n) {
  return factorial(n + m) / factorial(n) / factorial(m);
}
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
