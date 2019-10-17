/*
Description:
Calculate the product of all elements in an array.

If the array is null or is empty, the function should return null.
*/

function product(values) {
  return values&&values.length? values.reduce((a,b)=>a*b,1):null
}
