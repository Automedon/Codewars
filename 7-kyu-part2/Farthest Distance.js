/*
Description:
You are given a array which contains sub-arrays. Each sub-array represents a point in a (2d) cartesian coordinate system.

Create a function which returns the distance of the two points which are farthest apart.

All distances are to be rounded to 2 decimal places. If the array contains two points return the distance between them. There will always be at least two points.


furthestDistance([[1,2], [3,8], [4,3]]) // returns 6.32
Distances between

[1,2] [3,8] //6.32

[3,8] [4,3] //5.10

[1,2] [4,3] //3.16

This link may help if you don't know how to work out the distance between two points.
*/
function furthestDistance(arr) {
  let m = 0;
  for (var [x1, y1] of arr)
    for (var [x2, y2] of arr)
      m = Math.max(m, Math.hypot(Math.abs(x1 - x2), Math.abs(y1 - y2)));

  return +m.toFixed(2);
}
