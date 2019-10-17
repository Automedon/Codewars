/*
Description:
Write a function isIntArray with the below signature.

function isIntArray(arr) {
    return true;
}
returns true if every element in an array is an integer. 
returns true if array is empty.
returns false for every other input.
*/
function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}
