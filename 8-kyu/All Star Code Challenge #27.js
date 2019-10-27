/*
Description:
This Kata is intended as a small challenge for my students

All Star Code Challenge #27

Create a function called factorial() that takes an integer argument and returns the factorial.

For example, inputting 5 should calculate 5! = 5 x 4 x 3 x 2 x 1 = 120

factorial(5) // => 120
factorial(8) // => 40320
Note: By definition, zero factorial, 0!, equals 1
*/
function factorial(x){
  let sum=1;
  for (let i=x;i>=1;i--){
    sum*=i
  }
  return sum
}
