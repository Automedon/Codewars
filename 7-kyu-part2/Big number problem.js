/*
Description:
Exponential/scientific notation is used to write very large or small numbers in JavaScript. It uses positive and negative exponents to write multiples and submultiples of 10 and simplifies numbers by getting rid of zeros. If a number greater than 21 digits, in JavaScript, it is displayed in exponential notation and if you try to get the length of it by converting to the string you would get wrong number of length because of the specific way of its display.

Write a function which returns the number of digits in any number with more than 21 digits. If the function is passed a string or a number with 21 or fewer digits it should return "wrong input".

For example: If input number is 9000000000000000000000, then it should return number of digits, in this case 22. If numbers are 222222222 or "5263" which number of digits are less than 21 or "asdf///" which is not a number then it should return string 'wrong input'.
*/
function getNumberLength(n) {
  if (typeof n !== "number") "wrong input";
  let l = n.toString().slice(-2) * 1 + 1;
  if (isNaN(l)) return "wrong input";
  return l < 21 || l > 55 ? "wrong input" : l;
}
