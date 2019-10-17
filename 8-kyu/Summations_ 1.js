/*
Description:
Make a program that will take an int (x) and give you the summation of all numbers from 1 up to x included. If the given input is not an integer, return "Invalid Value".

Examples:

summation(25)==325
summation(2.56)=="Invalid Value"
The next problem in this series: Summation:2 (Link will be soon in once it is created)
*/
function summation(x){
  if (typeof x === 'number' && x%1===0) {
  let count=0;
  for (let i=0;i<=x;i++){
  count+=i
  }
  return count
  }
  return "Invalid Value"
}
