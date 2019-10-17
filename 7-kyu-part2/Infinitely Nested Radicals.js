/*
Description:
Hello,

I am Jomo Pipi

and today we will be evaluating an expression like this:

(there are an infinite number of radicals)

\LARGE \sqrt{x+\sqrt{x+\sqrt{x+\sqrt{x...}}}}
for a given value x

Simple!

arguments passed in will be 1 or greater
*/
function fn(x) {
  return (1 + Math.sqrt(1 + 4 * x)) / 2;
}
