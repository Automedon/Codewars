/*
Description:
#Reducing by rules to get the result

Your task is to reduce a list of numbers to one number.
For this you get a list of rules, how you have to reduce the numbers.
You have to use these rules consecutively. So when you get to the end of the list of rules, you start again at the beginning.

An example is clearer than more words...

numbers: [ 2.0, 2.0, 3.0, 4.0 ]
rules: [ (a,b) => a + b, (a,b) => a - b ]
result: 5.0

You get a list of four numbers.
There are two rules. First rule says: Sum the two numbers a and b. Second rule says: Subtract b from a.

The steps in progressing:
1. Rule 1: First number + second number -> 2.0 + 2.0 = 4.0
2. Rule 2: result from step before - third number -> 4.0 - 3.0 = 1.0
3. Rule 1: result from step before + forth number -> 1.0 + 4.0 = 5.0
Both lists/arrays are never null and will always contain valid elements.
The list of numbers will always contain more than 1 numbers.
In the list of numbers will only be values greater than 0.
Every rule takes always two input parameter.


Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/
function reduceByRules(numbers, rules){ 
  let num =rules[0](numbers[0],numbers[1]);  
  for (let i=2;i<numbers.length;i++){
    num=rules[(i-1)%rules.length](num,numbers[i])
  }
  return num
}
