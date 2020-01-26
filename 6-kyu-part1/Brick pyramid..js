/*
Description:
Brick "pyramid".

"Pyramid" is infinite.
"Pyramid" is two-dimensional (triangle).

(row, pos) - function parameters.
row - top row number ranging from zero,
pos - brick number from left to right ranging from zero.


Brick weight - 1 kg.

Every brick equally presses the bricks underneath.
1/2 to the left brick and 1/2 to the right.


If the brick pressed above with the total mass of 100 kg than the pressure is distributed evenly on the bottom bricks.


Required: implement function weight that calculates the pressure on the brick on the row, pos position.

Testing values:

weight(0, 0) => 0

weight(1, 0) => 0.5
weight(1, 1) => 0.5

weight(2, 0) => 0.75
weight(2, 1) => 1.5
weight(2, 2) => 0.75

weight(3, 0) => 0.875
weight(3, 1) => 2.125
weight(3, 2) => 2.125
weight(3, 3) => 0.875
*/
function weight(row, pos) {
   if (pos < 0 || pos > row || row == 0) return 0;
   if (row == 1) return 0.5;
   const topLeft = weight(row - 1, pos - 1) / 2;
   const topRight = weight(row - 1, pos) / 2;
   return (topLeft > 0 ? topLeft + 0.5 : 0) + (topRight > 0 ? topRight + 0.5 : 0);
}
