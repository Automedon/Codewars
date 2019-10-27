/*
Description:
Create a function christmasTree(height) that returns a christmas tree of the correct height

christmasTree(5) should return:

    *    
   ***   
  *****  
 ******* 
*********
Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.
*/
function christmasTree(height) {
  let str = [];
  for (let i = 1; i <= height; i++) {
    str.push(
      " ".repeat(height - i) +
        "*".repeat((i - 1) * 2 + 1) +
        " ".repeat(height - i)
    );
  }
  return str.join("\n");
}
