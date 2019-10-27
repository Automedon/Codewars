/*
Description:
Task
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example
For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be 6.

Here are all 6 different 2 × 2 squares:

 1 2
 2 2

 2 1
 2 2

 2 2
 2 2

 2 2
 1 2

 2 2
 2 3

 2 3
 2 1
Input/Output
[input] 2D integer array matrix

Constraints:

1 ≤ matrix.length ≤ 100,

1 ≤ matrix[i].length ≤ 100,

0 ≤ matrix[i][j] ≤ 9.

[output] an integer

The number of different 2 × 2 squares in matrix.
*/
function differentSquares(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      let temp = [
        matrix[i][j],
        matrix[i][j + 1],
        matrix[i + 1][j],
        matrix[i + 1][j + 1]
      ].join``;
      if (!arr.includes(temp)) {
        arr.push(temp);
      }
    }
  }
  return arr.length;
}
