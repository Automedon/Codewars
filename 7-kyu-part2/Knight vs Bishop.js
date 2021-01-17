/*
Description:
Knight vs Bishop
If you are not familiar with chess game you can learn more here.

You will be provided with two object arrays. Each of them contains an integer and a string which represent the positions of the pieces on the chess board (e.g. [4, "C"] and [6, "D"]).

Implement a function which returns:

"Knight" if the knight can capture the bishop
"Bishop" if the bishop can capture the knight
"None" if both pieces are safe
Check the test cases and Happy coding :)
*/
function knightVsBishop(knightPosition, bishopPosition) {
    knightPosition[1] = knightPosition[1].charCodeAt(0);
    bishopPosition[1] = bishopPosition[1].charCodeAt(0);
    const diffx = Math.abs(knightPosition[1] - bishopPosition[1]);
    const diffy = Math.abs(knightPosition[0] - bishopPosition[0]);
    if (diffx == diffy) {
      return "Bishop";
    }
    if (diffx == 2 && diffy == 1 || diffx == 1 && diffy == 2) {
      return "Knight";
    }
    return "None";
}
