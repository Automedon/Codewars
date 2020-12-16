/*
Description:
Sort array by last character

Complete the function to sort a given array or list by last character of elements.

Element can be an integer or a string.

Example:
['acvd', 'bcc']  -->  ['bcc', 'acvd']
The last characters of the strings are d and c. As c comes before d, sorting by last character will give ['bcc', 'acvd'].

If two elements don't differ in the last character, then they should be sorted by the order they come in the array.
*/
function sortMe(arr) {
  return arr.slice().sort((a, b) =>
        (a + "").slice(-1).localeCompare((b + "").slice(-1)) ||
        arr.indexOf(a) - arr.indexOf(b));
}
