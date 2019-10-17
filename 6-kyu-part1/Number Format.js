/*
Description:
Format any integer provided into a string with "," (commas) in the correct places.

Example:

numberFormat(100000); // return '100,000'
numberFormat(5678545); // return '5,678,545'
numberFormat(-420902); // return '-420,902'
*/
var numberFormat = function (number) {
  return number.toLocaleString()
};
