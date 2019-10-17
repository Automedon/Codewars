/*
Description:
So, your task is to sum up all the digits in string, possibly multiple times, till you get a one digit result. You should then return it as a string. The input will be always valid.

For example:

var str = '1234';
digitSum(str);  //returns 1

/* 1 + 2 + 3 + 4 = 10 <= this result doesn't have one digit => 1 + 0 = 1 */

var str = '1011';
digitSum(str);  //returns 3
/* 1 + 0 + 1 + 1 = 3 <= this result does have one digit => 3 */

var str = '2468';
digitSum(str);  //returns 2
/* 2 + 4 + 6 + 8 = 20 <= this result doesn't have one digit => 2 + 0 = 2 */
Good luck!
*/
function digitSum (str) {
  while(str.length!==1){
  str=str.split('').reduce((a,b)=>a+b*1,0).toString()
  }
  return str
}
