/*
Description:
Professor Chambouliard has just completed an experiment on gravitational waves. He measures their effects on small magnetic particles. This effect is very small and negative. In his first experiment the effect satisfies the equation:

x**2 + 1e9 * x + 1 = 0.

Professor C. knows how to solve equations of the form:

g(x) = a x ** 2 + b x + c = 0 (1)

using the "discriminant".

It finds that the roots of x**2 + 1e9 * x + 1 = 0 are x1 = -1e9 and x2 = 0. The value of x1 - good or bad - does not interest him because its absolute value is too big.

On the other hand, he sees immediately that the value of x2 is not suitable!

He asks our help to solve equations of type (1) with a, b, c strictly positive numbers, and b being large (b >= 10 ** 9).

Professor C. will check your result x2 (the smaller root in absolute value. Don't return the other root!) by reporting x2 in (1) and seeing if abs(g(x2)) < 1e-12.

Task:
solve(a, b, c)

that will return the "solution" x2 of (1) such as abs(a * x2 ** 2 + b * x2 + c) < 1e-12.

Example:
for equation 7*x**2 + 0.40E+14 * x + 8 = 0 we can find: x2 = -2e-13 which verifies abs(g(x)) < 1e-12.
*/
function quadratic(a, b, c) {
  return -c / b;
}
