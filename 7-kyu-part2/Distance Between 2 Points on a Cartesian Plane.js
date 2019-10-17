/*
Description:
Construct a function 'coordinates', that will return the distance between two points on a cartesian plane, given the x and y coordinates of each point.

There are two parameters in the function, p1 and p2. p1 is a list [x1,y1] where x1 and y1 are the x and y coordinates of the first point. p2 is a list [x2,y2] where x2 and y2 are the x and y coordinates of the second point.

The distance between the two points should be rounded to the precision decimal if provided, otherwise to the nearest integer.
*/
function coordinates([x1, y1], [x2, y2], precision) {
  return precision
    ? Math.hypot(x1 - x2, y1 - y2).toFixed(precision) * 1
    : Math.hypot(x1 - x2, y1 - y2).toFixed(0) * 1;
}
