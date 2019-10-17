/*
Description:
Based on this Numberphile video: https://www.youtube.com/watch?v=Wim9WJeDTHQ

Multiply all the digits of a nonnegative integer n by each other, repeating with the product until a single digit is obtained. The number of steps required is known as the multiplicative persistence.

Create a function that calculates the individual results of each step, not including the original number, but including the single digit, and outputs the result as a list/array. If the input is a single digit, return an empty list/array.

Examples
per(1)  = []

per(10) = [0]
// 1*0 = 0

per(69) = [54, 20, 0]
// 6*9 = 54 --> 5*4 = 20 --> 2*0 = 0

per(277777788888899) = [4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0]
// 2*7*7*7*7*7*7*8*8*8*8*8*8*9*9 = 4996238671872 --> 4*9*9*6*2*3*8*6*7*1*8*7*2 = 4478976 --> ...
*/
function per(n) {
  let arr = [];
  for (let i = 0; ; i++) {
    if (n.toString().length === 1) {
      break;
    }
    n = n
      .toString()
      .split("")
      .reduce((a, b) => a * b * 1, 1);
    arr.push(n);
  }
  return arr;
}
