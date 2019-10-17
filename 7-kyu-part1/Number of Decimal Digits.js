/*
Description:
Determine number of decimal digits in an unsiged integer. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
*/

function digits(n) {
  return ("" + n).length;
}
