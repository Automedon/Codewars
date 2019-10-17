/*
FizzBuzz is probably the second most popular way to introduce beginners to the art of coding (the first probably being the ancient Fibonacci sequence, the grandfather of all the algorithm theory).

In this very basic kata you will have to create a function that returns the same numbers that is given as a parameter, with the following exceptions:

If number divides evenly with 3 - returns string "fizz"
If number divides evenly with 5 - returns string "buzz"
If number divides evenly with 3 and 5 - returns string "fizz buzz"
Sample cases:

fizzbuzz(1)==1
fizzbuzz(9)=="fizz"
fizzbuzz(25)=="buzz"
fizzbuzz(37)==37
fizzbuzz(45)=="fizz buzz"
*/
function fizzbuzz(n) {
  if (n%3===0&&n%5===0) return "fizz buzz"
  if (n%3===0) return "fizz"
  if (n%5===0) return "buzz"
  return n
}
