/*
Description:
Given a string of words and numbers. Extract the expression including:

the operator: either addition or subtraction
the two numbers that we are operating on
Return the result of the calculation.

Example:

"Panda has 48 apples and loses 4" returns 44

"Jerry has 34 apples and gains 6" returns 40

"loses" and "gains" are the only two words describing operators.

Should be a nice little kata for you :)

Note: No fruit debts nor bitten apples = The numbers are integers and no negatives
*/

function calculate(string) {
  const arr = string
    .replace(/[^0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .split(" ");
  if (string.match(/loses/g)) {
    return arr[0] * 1 - arr[1] * 1;
  }
  return arr[0] * 1 + arr[1] * 1;
}
