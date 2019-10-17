/*
For any given linear sequence, calculate the function [f(x)] and return it as a string.

For example:

getFunction([0, 1, 2, 3, 4]) => "f(x) = x"
getFunction([0, 3, 6, 9, 12]) => "f(x) = 3x"
getFunction([1, 4, 7, 10, 13]) => "f(x) = 3x + 1"
Assumptions for this kata are:

the sequence argument will always contain 5 values equal to f(0) - f(4).
the function will always be in the format "nx +/- m", 'x +/- m', 'nx', 'x' or 'm'
if a non-linear sequence simply return 'Non-linear sequence' or Nothing in Haskell.
*/
function getFunction(seq) {
  let add = seq[0], mul = seq[1]-add, linear=seq.every(function(v,i){return v==i*mul+add});
  return linear ? "f(x) = "+ ( mul? (mul==1? '':mul==-1? "-":mul) +"x"+ (!add? "" : (add>0? " + ":" - ") +Math.abs(add)) : add ) : "Non-linear sequence"
}
