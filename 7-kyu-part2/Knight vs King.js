/*
Description:
Knight vs King
If you are not familiar with chess game you can learn more Here .

Here is the chess board:

alt text

You put a Knight and a king in the board.

Complete the method that tell us which one can capture the other one.

function knightVsKing(knightPosition, kingPosition) {
  // Three possible outputs are "Knight", "King" and "None".
}
You are provided with two object array; each contains an integer (first item) and a string (second item) to show the position of the pieces in the chess board.

kingPosition = [4, "C"];
knightPosition = [6, "D"];
Check the test cases and Happy coding :)
*/
function knightVsKing(R, K) {
  let dx = R[0] - K[0];
  let dy = R[1].charCodeAt() - K[1].charCodeAt();
  let d = dx * dx + dy * dy;
  if (d === 5) return "Knight";
  if (d < 3) return "King";
  return "None";
}
