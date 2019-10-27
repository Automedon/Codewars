/*
Write a function called surviveFirst like this:

  function surviveFirst(str) {
    // your code
  }
If str = 'abcdefg', the result should be 'a******'.

str will never be empty.
*/
function surviveFirst(str) {
  return str.slice(0, 1) + str.slice(1).replace(/./g, "*");
}
