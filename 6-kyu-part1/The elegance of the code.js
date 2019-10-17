/*
Description:
This program runs well but we need to make it more elegant.

Try to rewrite the code of the function factorial in way to use recursion.

You cannot use looping(for, while, forEach).

Note: If you find another solution this kata isn't for you, you're in a higher level.

Return examples

factorial(3)=>3 x 2 x 1 = 6

factorial(2)=>2 x 1 = 2

factorial(0)=>1 = 1
*/
function factorial(num){
  return num>1?num*factorial(num-1):1;
}
