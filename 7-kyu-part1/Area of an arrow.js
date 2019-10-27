/*
Description:
Area of an arrow
An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

arrow

a and b are integers and > 0

Write a function arrowArea/arrow_area, which returns the area of the arrow, rounded to two decimal places.
*/
function arrowArea(a, b) {
  return ((a * b) / 4).toFixed(2) * 1;
}
