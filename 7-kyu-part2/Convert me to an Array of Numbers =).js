/*
Your input is an array of strings and your task is to convert it into an array of numbers.

Please note two important things:

There will be no empty arrays if the string does not contain a number, it should return NaN

Examples:

Input: ["3","4","5"] Output: [3,4,5] Input: ["3","45"] Output: [3,45] Input: ["3","hELLo"] Output: [3, NaN]
*/
function convertMeIntoANumber(array) {
  return array.map(v => v * 1);
}
