/*
Description:
An Armstrong number is a number such that the sum of its digits raised to the third power is equal to the number itself. For example, 371 is an Armstrong number, since 3^3 + 7^3 + 1^3 = 371. It should return false if empty string or string is passed. It should return false for negative numbers as well.

When you pass 0 or 1 , it should return true.
*/
function armstrong(num){
  return num===num.toString().split``.reduce((a,b)=>a+Math.pow(b*1,3),0)
}
