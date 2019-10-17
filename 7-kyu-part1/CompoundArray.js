/*
Description:
You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}
*/

function compoundArray(a, b) {
  let arr=[];
 for (let i=0;i<(a.length>b.length?a.length:b.length);i++){ arr.push(a[i])
  arr.push(b[i])}
  return arr.filter(v=>v!=undefined)
}
