/*
Description:
Create function that outputs 2 dimensional table and places a character in it. Table size is 4 x 4. Function takes row, column and a character.

Assume that row and column values are between 0 inclusive and 4 exclusive.

Assume that character has length of 1.

Example:

row = 2
column = 3
character = "B"

---------
| | | | | 0
---------
| | | | | 1
---------
| | | |B| 2
---------
| | | | | 3
---------
 0 1 2 3 
*/
let str =
  "---------\n| | | | |\n---------\n| | | | |\n---------\n| | | | |\n---------\n| | | | |\n---------\n";
function buildTableText(row, column, character) {
  let arr = str.split(`---------\n`);
  arr[row + 1] = arr[row + 1]
    .split(" ")
    .map((v, i) => (i === column ? (v = "|" + character) : v))
    .join(` `)
    .replace(`${character} `, `${character}`);
  return arr.join(`---------\n`);
}
