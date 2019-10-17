function diagonalSum(matrix) {
  return matrix.reduce((accum, current, index) => accum + current[index], 0);
}
