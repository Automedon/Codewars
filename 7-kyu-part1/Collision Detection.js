/*
Description:
Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
}
If a collision is detected, return true. If not, return false.

Here's a geometric diagram of what the circles passed in represent:

alt text
*/
function collision(x1, y1, radius1, x2, y2, radius2) {
  return Math.hypot(x1 - x2, y1 - y2) < radius1 + radius2;
}
