/*
Description:
Task
Write a method remainder which takes two integer arguments, dividend and divisor, and returns the remainder when dividend is divided by divisor. Do NOT use the modulus operator (%) to calculate the remainder!

Assumption
Dividend will always be greater than or equal to divisor.

Notes
Make sure that the implemented remainder function works exactly the same as the Modulus Operator (%). For example n % 0 = NaN, your method should return null.

Some Random Test Cases are waiting up ahead...

To Java warriors...
SimpleInteger is a tiny and immutable implementation of an integer number. Its interface is a very small subset of the java.math.BigInteger API:

#add(SimpleInteger val)
#subtract(SimpleInteger val)
#multiply(SimpleInteger val)
#divide(SimpleInteger val)
#compareTo(SimpleInteger val)
*/

var remainder = function(D, d) {
  return isNaN(D - Math.floor(D / d) * d) ? "NaN" : D - Math.floor(D / d) * d;
};
