/*
Description:
Here's the defination of leap year:

A year will be a leap year if it is divisible by 4 but not by 100. If a year is divisible by 4 and by 100, it is not a leap year unless it is also divisible by 400.

Try to implement a method to see if a given year is leap year.

isLeapYear(2014) # false
isLeapYear(2000) # true
*/
function isLeapYear(y){
  if (y%400===0) return true
  if (y%4===0&&y%100===0) return false
  if (y%4===0) return true
  return false
}
