/*
Description:
Task
An ATM ran out of 10 dollar bills and only has 100, 50 and 20 dollar bills.

Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM wants to use as few bills as possible, determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).

Example
For n = 250, the result should be [2, 1, 0].

For n = 260, the result should be [2, 0, 3].

For n = 370, the result should be [3, 1, 1].

Input/Output
[input] integer n Amount of money to withdraw. Assume that n is always exchangeable with [100, 50, 20] bills.
[output] integer array An array of number of 100, 50 and 20 dollar bills needed to complete the withdraw (in that order).
*/
function withdraw(n) {
  let change = [0,0,0]
  while (n>=20){
    if (n%50===0){break}
    n-=20
    change[2]++
  }
  while (n>=100){
    n-=100
    change[0]++
  }
  while (n>=50){
    n-=50
    change[1]++
  }
  return change
}
