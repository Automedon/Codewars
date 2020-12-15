/*
Description:
Given a string of characters, I want the function findMiddle()/find_middle() to return the middle number in the product of each digit in the string.

Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

Not all strings will contain digits. In this case and the case for any non-strings, return -1.

If the product has an even number of digits, return the middle two digits

Example: 1563 -> 56

NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1
*/
function findMiddle(str){
  if (typeof str !== 'string' || !/\d/.test(str)) return -1; 
  str = Array.from(str.replace(/\D/g, '')).reduce((x, y) => x * y).toString();
  return +str.slice(Math.ceil(str.length / 2 - 1), Math.floor(str.length / 2 + 1));
}
