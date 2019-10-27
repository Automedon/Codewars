/*
Description:
Create a function that checks if a given string is a valid number or not.
*/
function isNumber(str) {
  return str ? !isNaN(str * 1) : false;
}
