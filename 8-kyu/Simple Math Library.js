/*
Write a simple library of the four basic math functions - add, subtract, multiply, and divide. Each function will take in two numbers and return the result of that operation on those two numbers. For example, calling

add(7, 3)
would return 10, and

multiply(7, 3)
would return 21.

For this kata, only valid numbers will be entered as parameters, so don't worry about error handling. Exactly two parameters will be passed to each function
*/
function add(){
  return [...arguments].reduce((a,b)=>a+b,0)
}
function subtract(){
   return [...arguments].reduce((a,b)=>-b-a,0)
}
function multiply(){
  return [...arguments].reduce((a,b)=>b*a,1)
}
function divide(a,b){
  return a/b
}
