/*
Description:
Complete the 'format' method - so that when a string is passed in, all empty curly braces (' {} ') are replaced with the strings in the array.

The array can be of any length, and the returned string must have the correct values, in the correct places, in the same order as they were in the initial array.

Example:

format("This is an {} for {}.", ["example", "you"]);
Should return - "This is an example for you."
*/
function format(str, arr) {
  for (let i=0;i<arr.length;i++)
  {
    str=str.replace(/{}/,arr[i])
  }
  return str;
}
