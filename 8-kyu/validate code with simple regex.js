/*
Description:
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.
*/

function validateCode (code) {
  return /^[1-3]/g.test(code)
}
