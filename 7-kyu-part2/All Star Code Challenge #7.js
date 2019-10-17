/*
Description:
This Kata is intended as a small challenge for my students

Create a function, called compute, that accepts an integer argument, N, and returns the value of the following expression, where N is a odd positive integer given by the user

Expression : 1 +....+ 1/(N)^2

For example, when N = 9, compute() should evaluate the following: 1 + 1/(3)^2 + 1/(5)^2 + 1/(7)^2 + 1/(9)^2 == ~1.1838649533887629

Note: User input of an even number OR a number less than 3 should return 0.


*/
function compute(n){
  if (n%2===0||n<=0) return 0
  let sum=1;
  for (let i=3;i<=n;i+=2)
    {
      sum+=1/Math.pow(i,2)
    }
  return sum
}
