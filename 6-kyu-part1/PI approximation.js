/*
Description:
The aim of the kata is to try to show how difficult it can be to calculate decimals of an irrational number with a certain precision. We have chosen to get a few decimals of the number "pi" using the following infinite series (Leibniz 1646–1716):

PI / 4 = 1 - 1/3 + 1/5 - 1/7 + ... which gives an approximation of PI / 4.

http://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80

To have a measure of the difficulty we will count how many iterations are needed to calculate PI with a given precision.

There are several ways to determine the precision of the calculus but to keep things easy we will calculate to within epsilon of your language Math::PI constant. In other words we will stop the iterative process when the absolute value of the difference between our calculation and the Math::PI constant of the given language is less than epsilon.

Your function returns an array or an arryList or a string or a tuple depending on the language (See sample tests) where your approximation of PI has 10 decimals

In Haskell you can use the function "trunc10Dble" (see "Your solution"); in Clojure you can use the function "round" (see "Your solution");in OCaml or Rust the function "rnd10" (see "Your solution") in order to avoid discusssions about the result.

Example :

your function calculates 1000 iterations and 3.140592653839794 but returns:
iter_pi(0.001) --> [1000, 3.1405926538]
Unfortunately, this series converges too slowly to be useful, as it takes over 300 terms to obtain a 2 decimal place precision. To obtain 100 decimal places of PI, it was calculated that one would need to use at least 10^50 terms of this expansion!

About PI : http://www.geom.uiuc.edu/~huberty/math5337/groupe/expresspi.html
*/
function iterPi(epsilon) {
  let pi = 0,
    iterations = 0,
    factor = 1,
    divider = 1;
  while (Math.abs(Math.PI - pi * 4) >= epsilon) {
    pi += factor / divider;
    factor = -factor;
    divider += 2;
    iterations += 1;
  }
  return [iterations, +(pi * 4).toFixed(10)];
}
