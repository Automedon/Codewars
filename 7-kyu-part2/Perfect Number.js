/*
Description:
Perfect Number is defined as a positve integer where the sum of all it's postive divisors "not including the number itself" equls the number itself.

For example 6 is a pefect number because the sum of it's divisors (1,2,3) = 6.

Read more : https://en.wikipedia.org/wiki/Perfect_number

You are requested to write a function that returns true "boolean value" if the number is perfect or false "boolean value" if not or if number is negative.
*/
function isPerfect(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (number % i === 0) arr.push(i);
  }
  return arr.reduce((a, b) => a + b, 0) === number;
}
