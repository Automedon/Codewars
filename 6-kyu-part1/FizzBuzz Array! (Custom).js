/*
Description:
Write a function that returns an array of numbers from 1 to 100.

The function should be able to be called with or without arguments.

If no arguments are given, each number in the array divisible by 3 should be replaced with the word 'Fizz', and each number in the array divisible by 5 should be replaced with the word 'Buzz'. If the number is divisble by both 3 and 5, then it should be replaced with 'FizzBuzz'.

The function should also be able to take up to 4 arguments. The first and second arguments are strings, which should be 'Fizz' and 'Buzz' by default.

The third and fourth arguments are integers and and should be 3 and 5 by default.

Example

fizzBuzzCustom()[15]                         // returns 16
fizzBuzzCustom()[44]                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
fizzBuzzCustom('Hey', 'There')[25]         // returns 26
fizzBuzzCustom('Hey', 'There')[11]         // returns "Hey" (12 is divisible by 3)
fizzBuzzCustom("What's ", "up?", 3, 7)[80] // returns "What's " (81 is divisible by 3)
*/
var fizzBuzzCustom = function(s1='Fizz', s2='Buzz', n1=3, n2=5) {
  let arr = [];
  for (let i=1; i <=100; i++){
  if (i%n1===0&&i%n2===0){
  arr.push(s1+s2)}
  else if (i%n1===0){
  arr.push(s1)}
  else if (i%n2===0){
  arr.push(s2)}
  else {arr.push(i)}
  }
  return arr
};
