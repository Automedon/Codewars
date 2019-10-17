/*
Description:
Create a function that takes index [0, 8] and a character. It returns a string with columns. Put character in column marked with index.

Ex.: index = 2, character = 'B'

| | |B| | | | | | |
 0 1 2 3 4 5 6 7 8
Assume that argument index is integer [0, 8]. Assume that argument character is string with one character.

Hint: http://devdocs.io/javascript/global_objects/string/substr
*/
function buildRowText(index, character) {
  const arr = [];
  for (let i = 0; i <= 8; i++) {
    if (i === index) {
      arr.push(`|${character}`);
    } else {
      arr.push("|");
    }
  }
  arr.push("|");
  return arr.join(" ").replace(/\w\s/g, `${character}`);
}
