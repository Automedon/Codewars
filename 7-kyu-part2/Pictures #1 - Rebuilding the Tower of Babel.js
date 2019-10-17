/*
Pictures #1 - Rebuilding the Tower of Babel

Task
Define a function, babel, which accepts a positive integer argument height and returns a string representing a tower of the specified height. If the height is 0 then return an empty string. Input validation is not required.

Some examples below:

babel(0) === ``

babel(1) === `o
o
o`

babel(2) === ` o
 o
 o
ooo
ooo
ooo`

babel(3) === `  o
  o
  o
 ooo
 ooo
 ooo
ooooo
ooooo
ooooo`

babel(4) === `   o
   o
   o
  ooo
  ooo
  ooo
 ooooo
 ooooo
 ooooo
ooooooo
ooooooo
ooooooo`

babel(5) === `    o
    o
    o
   ooo
   ooo
   ooo
  ooooo
  ooooo
  ooooo
 ooooooo
 ooooooo
 ooooooo
ooooooooo
ooooooooo
ooooooooo`
If you are still confused as to what the pattern is, here are a few simple rules:

For each width of the tower you build three consecutive stories of the same width
Each time you complete 3 stories, the width of the tower increases by 2 units (1 to the left and 1 to the right)
You should add appropriate whitespace characters to the left of the tower for appropriate padding but there should be no trailing whitespace characters for all stories
You separate one story from then next with a newline "\n" character
There should not be a trailing newline character at the end of the string
Happy Coding :D

Preloaded
Preloaded for you is a handy n.times method that you may want to use to greatly simplify your code. However, it is not compulsory to use this method in your code - just feel free to use whatever you want :)

P.S. If you haven't completed the n.times Kata already you may want to complete it first before continuing on this Kata :D
*/
function babel(height) {
  let arr = [];
  for (let i = 0; i < height; i++) {
    arr.push(" ".repeat(height - i - 1) + "o".repeat(1 + i * 2));
    arr.push(" ".repeat(height - i - 1) + "o".repeat(1 + i * 2));
    arr.push(" ".repeat(height - i - 1) + "o".repeat(1 + i * 2));
  }
  return arr.join`\n`;
}
