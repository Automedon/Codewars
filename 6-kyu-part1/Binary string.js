/*
Description:
Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value: toBinaryString(6) should return "110" (no leading 0).

Use of the native method
number.toString(2);
is disallowed.
*/

function toBinaryString(num) {
  let out = "",
    bit = 1;
  while (num >= bit) {
    out = (num & bit ? 1 : 0) + out;
    bit <<= 1;
  }
  return out || "0";
}
