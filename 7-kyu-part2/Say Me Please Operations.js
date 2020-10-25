/*
Description:
You have a string of numbers; starting with the third number each number is the result of an operation performed using the previous two numbers.

Complete the function which returns a string of the operations in order and separated by a comma and a space, e.g. "subtraction, subtraction, addition"

The available operations are (in this order of preference):

1) addition
2) subtraction
3) multiplication
4) division
Notes:

All input data is valid
The number of numbers in the input string >= 3
For a case like "2 2 4" - when multiple variants are possible - choose the first possible operation from the list (in this case "addition")
Integer division should be used
Example
"9 4 5 20 25"  -->  "subtraction, multiplication, addition"
Because:

9 - 4 = 5   --> subtraction
4 * 5 = 20  --> multiplication
5 + 20 = 25 --> addition
*/
function sayMeOperations(str) {
  str = str.split` `.map(v=>Number(v))
  const operations = []
  for (let i=0; i < str.length-2; i++){
    if (str[i]+str[i+1]==str[i+2]) operations.push('addition')
    else if (str[i]-str[i+1]==str[i+2]) operations.push('subtraction')
    else if (str[i]*str[i+1]==str[i+2]) operations.push('multiplication')
    else operations.push('division')
  }
  return operations.join`, `
}
