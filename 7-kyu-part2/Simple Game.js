/*
Description:
 It is necessary to define who of two players will win the game in the ideal moves of each.
 The NxM board is given, the players' figures are on opposite sides of the board.

4x7
|X.....Y|
|X.....Y|
|X.....Y|
|X.....Y|
 In his turn, the player must move one of his figures forward horizontally to any number of cells, but not further than the enemy figure on this line.

|X......Y..|  =>  |.X.....Y..| or |..X....Y..| or ... or |......XY..|
 A player who can't make a move loses.

Example 3х6 game (not ideal):

      |X....Y|
      |X....Y|
      |X....Y|
      --------
|...X.Y|    |...X.Y|
|X....Y|    |X....Y|
|X....Y|    |XY....|
--------    --------
|...X.Y|    |...X.Y|
|..X..Y|    |..X.Y.|
|XY....|    |XY....|
--------    --------
|....XY|    |....XY|
|..X.Y.|    |..XY..|
|XY....|    |XY....|
 Player X can't make a turn => player Y is winner.

@param {n,m} n>=1 m>=2
@return {player} 'first' or 'second'
Examples:

(3,7)   =>  'first'
(6,12)  =>  'second'
(2,4)   =>  'second'
*/
function game(n, m) {
  if (m === 2) return "second";
  if (n % 2 !== 0 && m % 2 === 0) return "first";
  if (n % 2 !== 0) return "first";
  return "second";
}
