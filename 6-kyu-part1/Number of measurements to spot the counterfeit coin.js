/*
Description:
coins balance scale problemI found this interesting interview question just today:

8 coins are given where all the coins have equal weight, except one. The odd one weights less than the others, not being of pure gold. In the worst case, how many iterations are actually needed to find the odd one out on a two plates scale.

I am asking you then to tell me what is the minimum amount of weighings it will take to measure n coins in every possible occurrence (including worst case scenario, ie: without relying on luck at all).

n is guaranteed to be a positive integer.

Tip: being able to think recursively might help here :p

Note: albeit this is more clearly a logical than a coding problem, do not underestimate (or under-rank) the kata for requiring not necessarily wizard-class coding skills: a good coder is a master of pattern recognition and subsequent optimization ;)
*/
function howManyMeasurements(n) {
  return Math.ceil(Math.log(n) / Math.log(3));
}
