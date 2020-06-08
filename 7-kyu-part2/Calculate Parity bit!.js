/*
Description:
You have the parameters parity and bin. Parity is always 'even' or 'odd'. Your task is to return an integer (0 or 1).

A parity bit, or check bit, is a bit added to a string of bits to ensure that the total number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code.

Example:

  Parity: 'even'
  Bin: '0101010'
  Result: 1
Because there is an odd number of 1-bits (3) you need to put another 1 to it to get an even number of 1-bits.

For more information: https://en.wikipedia.org/wiki/Parity_bit
*/
function checkParity(parity, bin){
   return Number(parity === (bin.split('1').length % 2 ? 'odd' : 'even'))
}
