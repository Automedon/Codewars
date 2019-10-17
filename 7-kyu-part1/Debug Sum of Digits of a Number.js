/*
Description:
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
getSumOfDigits(123) // -> 6
*/

function getSumOfDigits(integer) {
   return integer.toString().split('').reduce((a,b)=>a+ +b,0)
}
