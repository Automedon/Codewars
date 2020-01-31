/*
Description:

#Task:

Write a function that returns true if the number is a "Very Even" number.

If the number is odd, it is not a "Very Even" number.

If the number is even, return whether the sum of the digits is a "Very Even" number.

#Examples:

input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

input(222) => returns true

input(5) => returns false
Note: The numbers will always be positive!
*/
function isVeryEvenNumber(n) {
  let str = n.toString()
  while(str.length!==1){
    str=str.split``.reduce((a,b)=>a+b*1,0).toString()
  }
  return str*1%2===0
}
