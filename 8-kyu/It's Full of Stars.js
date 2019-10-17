/*
Description:
You need to create rectangles of stars for your next great text-based adventure game.

Each rectangle is made of rows and columns of asterisks. The following piece of code creates a rectangle with 3 rows and 6 columns:

var yay = printStars(3, 6);
console.log(yay);
This example code above would print out the following:

******
******
******
In this example, the string returned from the function is the following:

"******\n******\n******"
A few additional rules:

A newline character ( "\n" ) should be between each row of asterisks.
If the number of rows or columns is 0 or less, return an empty string ( "" ).
Good luck!
*/
function printStars(rows, columns) {
  if (rows<=0||columns<=0) return ''
  const arr=[];
  for (let i=0;i<rows;i++){
  arr.push('*'.repeat(columns))
  }
  return arr.join('\n');
}
