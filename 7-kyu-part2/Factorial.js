/*
Write a function that returns the factorial of a number ---------- EXAMPLE: factorial(5) == 120
*/
function factorial(num) {
  let sum=1;
  for (let i=1;i<=num;i++)
    sum*=i
  return sum
}
