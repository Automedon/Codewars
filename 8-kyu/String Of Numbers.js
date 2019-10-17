/*
Description:
Given the arguments of two numbers, return a string of whole numbers between them, exclusive.

The output should be a string of increasing numbers.

Return an empty string if there are no numbers in between.
*/
let strOfNums = (num1, num2) => {
  let start=Math.min(num1,num2)
  let end=Math.max(num1,num2)
  let str='';
  for (let i=start+1;i<end;i++)
  {
  str+=i
  }
  return str
}
