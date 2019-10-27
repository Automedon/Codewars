/*
Description:
Write a function getDecimal(n) that returns only decimal part of the given number.

You only have to handle valid numbers, not infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  == 0.4
getDecimal(-0.2) == 0.2
*/
function getDecimal(n){
  let num=n.toString().split('.')[1]
  return  num===undefined ? 0 : ('0'+'.'+num)*1
}
