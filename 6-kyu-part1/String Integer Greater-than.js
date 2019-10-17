/*
Description:
You are to write a function, stringIntGreaterThan that must accept arguments, each being the string representation of an positive or negative integer of any length (could contain a thousand digits, or more; also, integers will not have leading zeros).

The function should then return true if the first argument is greater than the second argument, false if not.
*/
const BigNumber = require('bignumber.js');
function stringIntGreaterThan(a, b) {
  return new BigNumber(a).gt(new BigNumber(b)) 
} 
