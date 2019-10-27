/*
Description:
Modify the spacify function so that it returns the given string with spaces between each letter. In this exercise, you can assume that only strings will be passed to your function.

spacify('hello world') // h e l l o  w o r l d
*/
function spacify(str) {
  return str.split("").join(" ");
}
