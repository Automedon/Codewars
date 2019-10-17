/*
Description:
Your task is to write a function taking the coordinates of three points with different x, y coordinates: A(x1, y1), B(x2, y2) and C(x3, y3), and determine whether B is the tip of an isosceles triangle.

B is the tip of an iscosceles triangle only if the length of AB is equal to BC.
*/
function isEquilateral(x1, y1, x2, y2, x3, y3) {
  let AB=Math.hypot(x2-x1,y2-y1)
  let BC=Math.hypot(x3-x2,y3-y2)
  return AB===BC
}
