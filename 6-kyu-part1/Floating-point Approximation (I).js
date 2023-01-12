/*
Description:
Consider the function

f: x -> sqrt(1 + x) - 1 at x = 1e-15.

We get: f(x) = 4.44089209850062616e-16

or something around that, depending on the language.

This function involves the subtraction of a pair of similar numbers when x is near 0 and the results are significantly erroneous in this region. Using pow instead of sqrt doesn't give better results.

A "good" answer is 4.99999999999999875... * 1e-16.

Can you modify f(x) to give a good approximation of f(x) in the neigbourhood of 0?

Note:

Don't round or truncate your results. See the testing function in Sample Tests:.
*/

function f(x) {
  return x / (1 + Math.sqrt(1 + x));
}
