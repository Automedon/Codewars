/*
Description:
given a number n, draw stairs with 'I' n tall and n wide, with the tallest in the top left. Example (with - to represent spaces; DO NOT USE THEM IN THE SOLUTIONS! USE SPACES IN SOLUTION! the "-"s are for clarity.): draw_stairs(3) == '''I\n_I\n__I'''

For example, a 7-step stairs should be drawn like this:

const sevenStepStairs = drawStairs(7);
I
 I
  I
   I
    I
     I
      I
*/
function drawStairs(n) {
   let str = ''
   for (let i=0;i<n;i++){
     str+=' '.repeat(i)+'I\n'
   }
   return str.slice(0,-1)
}
