/*
Description:

In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is integer (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, string or null.

Example 
isInt(3) = true ; 
isInt(3.1) = false ;
*/
function isInt(n){
  return n===parseInt(n)
}
