/*
Description:
Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

Matrix = array of n length whose elements are n length arrays of integers.

3x3 example:

diagonals( [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
] ); 

returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7
*/
function sum(matrix) {
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < matrix.length; i++) {
    arr1.push(matrix[i][i]);
    arr2.push(matrix[i].reverse()[i]);
  }
  return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);
}
