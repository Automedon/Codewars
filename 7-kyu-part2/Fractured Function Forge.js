/*
Description:
Mei has written a power function that accepts an exponent as an argument (including negative numbers).

power returns a function that itself accepts a number as an argument, then returns that number raised to the given power.

For example:

var squared = power(2);
console.log( squared(5) ); // 25
Mei's function isn't working as expected. Can you help fix it?
*/
function power(exp) {
  return function(x) {
    let result = x;
    if (exp === 0) return 1;
    if (exp < 0 && x === 0) return Infinity;
    if (exp < 0) {
      for (let i = 0; i < Math.abs(exp - 1); i++) {
        result *= 1 / x;
      }
      return result;
    }
    for (let i = 0; i < exp - 1; i++) {
      result *= x;
    }
    return result;
  };
}
