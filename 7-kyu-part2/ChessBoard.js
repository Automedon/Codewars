/*
Description:
Write a function that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character (black='#', black always starts top/left). The characters should form a chess board.


When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/
function board(size) {
  let chess_row = "";
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if ((y + x) % 2 == 0) {
        chess_row += "#";
      } else {
        chess_row += " ";
      }
    }
    chess_row += "\n";
  }
  return chess_row;
}
