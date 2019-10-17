/*
Description:
Task
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example
For cell = "a1", the output should be 2.



For cell = "c2", the output should be 6.



Input/Output
[input] string cell

String consisting of letter+number - coordinates of the knight on an 8 × 8 chessboard in chess notation.

[output] an integer
*/
function chessKnight(cell) {
  const [x, y] = ["abcdefgh".indexOf(cell[0]), +cell[1] - 1]
  return  [[2, 3, 4, 4, 4, 4, 3, 2],
           [3, 4, 6, 6, 6, 6, 4, 3],
           [4, 6, 8, 8, 8, 8, 6, 4],
           [4, 6, 8, 8, 8, 8, 6, 4],
           [4, 6, 8, 8, 8, 8, 6, 4],
           [4, 6, 8, 8, 8, 8, 6, 4],
           [3, 4, 6, 6, 6, 6, 4, 3],
           [2, 3, 4, 4, 4, 4, 3, 2]][x][y]
}
