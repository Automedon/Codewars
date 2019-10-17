/*
Description:
Training JS #35:
methods of Math---log() and its family

In this lesson we learn about log() and its family: methods log10() , log2(), log1p(), constants LN2, LN10, LOG2E, LOG10E. They are the different calculation methods of natural logarithm.

Their definitions and detailed information:

methods:

Math.log()
Math.log10()
Math.log2()
Math.log1p()
constants:

Math.LN2
Math.LN10
Math.LOG2E
Math.LN10E
Here we use some examples to understand their usage(because my MATH is poor, so there is not too many examples):

We can use the log() to calculate the power:

var base=2,n1=4,n2=1024,n3=1048576
//Math.pow(base,??)=n1  we need calculate for ??
console.log( Math.log(n1)/Math.log(base) )  //output:2
console.log( Math.log(n1)/Math.LN2 )   //output:2  LN2 equals log(2)

//Math.pow(base,??)=n2  we need calculate for ??
console.log( Math.log(n2)/Math.log(base) )  //output:10
//Math.pow(base,??)=n3  we need calculate for ??
console.log( Math.log(n3)/Math.log(base) )  //output:20

//Verify the result of calculation:
console.log(Math.pow(base,2))  //output:4
console.log(Math.pow(base,10))  //output:1024
console.log(Math.pow(base,20))  //output:1048576
Here's an example of the bank rate. It uses the log1p():

//John saved $1000 in the bank, the annual interest rate is 10%, 
//the question: how many years John's deposits more than 1200, 1500, 1800?
var year1=Math.log1p(0.2)/Math.log1p(0.1)  //or: Math.log(1.2)/Math.log(1.1)
console.log(year1)  //output: 1.9129284738342431

var year2=Math.log1p(0.5)/Math.log1p(0.1)
console.log(year2)  //output: 4.25416370990589

var year3=Math.log1p(0.8)/Math.log1p(0.1)
console.log(year3)  //output: 6.167092183740134

//In fact, we need a integer number of years, so we need to use ceil()
console.log(Math.ceil(year1),Math.ceil(year2),Math.ceil(year3))
//output: 2 5 7

//the answer is need 2 years, 5 years and 7 years.
//Let's see if the answer is correct:
//money  year1  year2  year3  year4   year5    year6    year7
//1000   1100   1210   1321   1453.1  1598.41  1758.25  1934.08

//I am very curious, how many years John's money will be turned into 10000 dollars?
//Let's calculate:
var year4=Math.log1p(9)/Math.log1p(0.1)
console.log(Math.ceil(year4))  //output: 25

//OK, after 25 years, John will have 10000 dollars ;-)
In fact, log1p(x) equals to log(1+x). log() is very useful when we need to calculate the increment or decrement.

Ok, lesson is over. let's us do some task.

#Task
Coding in function ```thinkingAndTesting```. 

This time I won't explain to you how to do it. You need to look at the test cases. Thinking and testing. solve this kata by yourself ;-)

The only hint is: it is related to ```power```.

If you are interested in this form of kata, I recommend to you my [Thinking and Testing Series](http://www.codewars.com/kata/56d904db9963e9cf5000037d)
*/
function thinkingAndTesting(n,b){
  return n-b**(Math.floor(Math.log(n)/Math.log(b)))
}
