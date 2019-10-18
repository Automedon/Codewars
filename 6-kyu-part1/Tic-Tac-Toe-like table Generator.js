/*
Description:
Do you have in mind the good old TicTacToe?

Assuming that you get all the data in one array, you put a space around each value, | as a columns separator and multiple - as rows separator, with something like ["O", "X", " ", " ", "X", " ", "X", "O", " "] you should be returning this structure (inclusive of new lines):

 O | X |   
-----------
   | X |   
-----------
 X | O |   
Now, to spice up things a bit, we are going to expand our board well beyond a trivial 3 x 3 square and we will accept rectangles of big sizes, still all as a long linear array.

For example, for "O", "X", " ", " ", "X", " ", "X", "O", " ", "O"] (same as above, just one extra "O") and knowing that the length of each row is 5, you will be returning

 O | X |   |   | X 
-------------------
   | X | O |   | O 
And worry not about missing elements, as the array/list/vector lenght is always going to be a multiple of the width.
*/
function displayBoard(board, width){
  board=board.map(v=>' '+v+' ')
  let desk = []
  for (let i=0;i<board.length;i+=width){
    desk.push(board.slice(i,i+width))
  }
  let line = `-`.repeat(4*width-1)
  return desk.map(v=>v.join`|`).join('\n'+line+'\n')
}
