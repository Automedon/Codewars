/*
Description:
Task
You are given a decimal number n as a string. Transform it into an array of numbers (given as strings again), such that each number has only one nonzero digit and their sum equals n.

Each number in the output array should be written without any leading and trailing zeros.

Input/Output
[input] string n

A non-negative number.

1 ≤ n.length ≤ 30.

[output] a string array

Elements in the array should be sorted in descending order.

Example
For n = "7970521.5544" the output should be:

 ["7000000", 
 "900000", 
 "70000", 
 "500", 
 "20", 
 "1", 
 ".5",
 ".05",
 ".004",
 ".0004"]
For n = "7496314", the output should be:

 ["7000000", 
 "400000", 
 "90000", 
 "6000", 
 "300", 
 "10", 
 "4"]
For n = "0", the output should be []
*/
function splitExp(n) {
  let str = n.split(".");
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < str[0].length; i++) {
    arr1.push(str[0].slice(i, i + 1) + "0".repeat(str[0].length - 1 - i));
  }
  arr1 = arr1.filter(v => v * 1 !== 0);
  if (str[1]) {
    for (let i = 0; i < str[1].length; i++) {
      arr2.push("." + "0".repeat(i) + str[1].slice(i, i + 1));
    }
    arr2 = arr2.filter(v => v * 1 !== 0);
    return arr1.concat(arr2);
  }
  return arr1;
}
