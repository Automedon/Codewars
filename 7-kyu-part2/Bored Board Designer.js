/*
As a Games Board Designer, you decide that the future looks a lot like chess! But, you want to create different board outputs, because chess isn't always going to be 64 squares in a pretty 8 by 8 pattern

You've also decided that the future does not have to be square! It could be a rectangle. (ie, you could have a different number of columns to rows)

To represent the board layout, you simply have to return a string with a space for a white square and a # for a black square. The top left square is ALWAYS going to be a white square

Make a function that takes in 2 numbers - the first is columns, the second is rows.

(6,6)

` # # #
 # # # 
  # # #
 # # #
  # # #
 # # #
'
Your Printers expect the final character to be a new line, so that their systems know when to stop running, so make sure that's there!
*/
function generateBoard(cols, rows) {
  let f = Math.floor(cols / 2);
  let s = Math.ceil(cols / 2);
  let arr = [];
  for (let i = 0; i < rows; i++) {
    if (cols % 2 !== 0) {
      if (i % 2 == 0) arr.push(" # ".repeat(f));
      else arr.push("# ".repeat(s).trim());
    } else {
      if (i % 2 == 0) arr.push(" #".repeat(f));
      else arr.push("# ".repeat(s));
    }
  }
  return (arr.join("\n") + "\n").replace(/  /g, " ");
}
