/*
Description:
Convert an integer number into binary 1's and 0's string! Dealing only with positive integers, the input number should be able to be converted to a binary string with a leading zero!

In binary, the left-most digit represents the sign of the binary number: 0 for positive, 1 for negative (using 2's complement, but that's another story)

For this test example we will only be using positive integers for simplicity:

int_2_bin(0) ==> '0'
int_2_bin(1) ==> '01'
int_2_bin(5) ==> '0101'
*/
function int2Bin(num) {
  return num === 0 ? "0" : "0" + num.toString(2);
}
