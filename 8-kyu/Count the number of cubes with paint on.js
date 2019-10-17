/*
Description:
Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

The number of times that the cube is cut in each dimension --> the argument 'cuts'.

To solve the puzzle you must create a function that returns an integer representing the total number of small cubes with at least one red side.

Examples:
countSquares(2) --> 26
countSquares(4) --> 98
*/

var countSquares = function(cuts){
  return (cuts ? 6 * Math.pow(cuts, 2) + 2 : 1)
}
