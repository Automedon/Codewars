/*
Description:
Let's do a simple approximation of the integral of a continuous function.

In this kata, we will implement: left_riemann(f, n, a, b)

In the test, we will pass a function that takes a single float argument to compute the value of the function. Your job is to approximate the integral of that function on the closed interval [a,b] with n rectangles. You will use the left hand rule. For a better explanation of the assigment visit the wikipedia page on riemann sums linked below:

http://en.wikipedia.org/wiki/Riemann_sum

f will always take a single float argument
f will always be a "nice" function, don't worry about NaN
n will always be a natural number (0, N]
b > a
and n will be chosen appropriately given the length of [a, b] (as in I will not have step sizes smaller than machine epsilon)
*/
function left_riemann(f, n, a, b){
  let	sum = 0
  let h = (b - a) / n 
    for (let i=0;i<n;i++){
        let x = h * i + a
        sum += f(x)
      }
    return sum * h
}
