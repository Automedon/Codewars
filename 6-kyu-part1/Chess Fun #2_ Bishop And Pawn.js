/*
Description:
Task
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


Example
For bishop = "a1" and pawn = "c3", the output should be true.



For bishop = "h1" and pawn = "h3", the output should be false.



Input/Output
[input] string bishop

Coordinates of the white bishop in the chess notation.

[input] string pawn

Coordinates of the black pawn in the same notation.

[output] a boolean value

true if the bishop can capture the pawn, false otherwise.
*/
function bishopAndPawn(bishop, pawn) {
  let desk = [];
  for (let i = 0; i < 8; i++) {
    let temp = [];
    for (let j = 0; j < 8; j++) {
      temp.push(0);
    }
    desk.push(temp);
  }
  let mapL = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
  let mapN = { 1: 7, 2: 6, 3: 5, 4: 4, 5: 3, 6: 2, 7: 1, 8: 0 };
  let b = bishop.split``;
  let x = mapL[b[0]];
  let y = mapN[b[1]];
  for (let i = y, j = x; j >= 0 && i >= 0; j--, i--) {
    desk[i][j] = 1;
  }
  for (let i = y, j = x; j < 8 && i < 8; j++, i++) {
    desk[i][j] = 1;
  }
  for (let i = y, j = x; j < 8 && i >= 0; j++, i--) {
    desk[i][j] = 1;
  }
  for (let i = y, j = x; j >= 0 && i < 8; j--, i++) {
    desk[i][j] = 1;
  }
  let p = pawn.split``;
  let xP = mapL[p[0]];
  let yP = mapN[p[1]];
  return desk[yP][xP] === 1;
}
