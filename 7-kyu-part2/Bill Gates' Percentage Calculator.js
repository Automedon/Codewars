/*
Description:
Bill Gates currently resides in Washington state as a technology advisor to the Microsoft Corporation. He didn't get to where he was without many years of practice. One of the first computer programs that Gates wrote in his youth was a calculator that calculated the percentage of a number.

As someone who is a Bill Gates enthusiast, you want to write a function to mimic this calculator. This functon should two parameters, a number and another number that the first number is a percent of. It should also return a string.
*/
function gatesCalculator(num1, num2) {
  return `%${(num1 / num2) * 100}`;
}
