/*
Description:
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/
function onlyDuplicates(str) {
  return str.split``.filter(v=>str.replace(new RegExp(v,'g'),'').length!==str.length-1).join``
}
