/*
Description:
###Lucky number
Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisble by 9, hence number is lucky.
Function will return true for lucky numbers and false for others.
*/
function isLucky(n) {
  const res = n
    .toString()
    .split("")
    .reduce((a, b) => a + b, 0);
  return res % 9 === 0 || res === 0;
}
