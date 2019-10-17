/*
Description:
Queen of the Forest needs a function that will add a specified quantity of leading zeros to any given number.

For example, if a 5-digit number is needed, and we pass in 11, the returned value would be 00011. There are many ways to achieve this. Additionally, if the size passed is less than the length of number, just return the number as a string. Let's have one that would be both useful and good performance-wise.

NOTES:

1) Numbers passed only - no strings, objects, functions, etc.

2) Whole positives only - negatives converted, decimals dropped (provided in solution setup)
*/
function zeroFill(number, size) {
  let num=Math.floor(Math.abs(number)).toFixed(0);
  return '0'.repeat((size-num.length)>0?size-num.length:0)+num
}
