/*
Description:
Create four simple functions:

1.It get integer X, and return int X+1. (function number 1)

2.It get integer X, and return int X+2. (function number 2)

3.It get integer X, and return int X+3. (function number 3)

4.It get integer X, and return int X+4. (function number 4)

Then create another function to get the function number (as an integer) and return the Function.

So, if you want fuction of X+2, you call the method by MethodFunc(2)

It has to return the function

providing i=4:

function methodFunc(i)
then function number 4 is called (get x, return x+4) so:

methodFunc(1)(100) = 101
Write your function so that any call such as MethodFunc(x)(y) outputs x+y. (1<=x<=4)
*/
function methodFunc(i) {
  return x=>{
  return i+x
  }
}
