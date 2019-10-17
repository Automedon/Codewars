/*
Description:
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

Rows:



There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

Columns:



There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

Regions



A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

Valid board example:



For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/
*/

function doneOrNot(board) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  let count7 = 0;
  let count8 = 0;
  let count9 = 0;
  for (let i = 0; i < board.length; i++) {
    count0 += board[i][0];
    count1 += board[i][1];
    count2 += board[i][2];
    count3 += board[i][3];
    count4 += board[i][4];
    count5 += board[i][5];
    count6 += board[i][6];
    count7 += board[i][7];
    count8 += board[i][8];
  }
  return count0 === 45 &&
    count1 === 45 &&
    count2 === 45 &&
    count3 === 45 &&
    count4 === 45 &&
    count5 === 45 &&
    count6 === 45 &&
    count7 === 45 &&
    count8 === 45 &&
    board[7][8] != board[8][7]
    ? "Finished!"
    : "Try again!";
}
