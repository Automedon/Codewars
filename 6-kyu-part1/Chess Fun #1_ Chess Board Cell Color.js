/*
Description:
Task
Given two cells on the standard chess board, determine whether they have the same color or not.

Example
For cell1 = "A1" and cell2 = "C3", the output should be true.


For cell1 = "A1" and cell2 = "H3", the output should be false.



Input/Output
[input] string cell1

[input] string cell2

[output] a boolean value

true if both cells have the same color, false otherwise.
*/
function chessBoardCellColor(cell1, cell2) {
  let obj = {};

  for (let i = 1; i < 9; i++) {
    if (i % 2 === 0) {
      obj[`A${i}`] = 1;
      obj[`B${i}`] = 0;
      obj[`C${i}`] = 1;
      obj[`D${i}`] = 0;
      obj[`E${i}`] = 1;
      obj[`F${i}`] = 0;
      obj[`G${i}`] = 1;
      obj[`H${i}`] = 0;
    } else {
      obj[`A${i}`] = 0;
      obj[`B${i}`] = 1;
      obj[`C${i}`] = 0;
      obj[`D${i}`] = 1;
      obj[`E${i}`] = 0;
      obj[`F${i}`] = 1;
      obj[`G${i}`] = 0;
      obj[`H${i}`] = 1;
    }
  }
  return obj[`${cell1}`] === obj[`${cell2}`];
}
