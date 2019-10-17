/*
Description:
The problem
In this kata, you're going write a function called pointInPoly to test if a point is inside a polygon.

Points will be represented as [x,y] arrays.

The polygon will be an array of points which are the polygon's vertices. The last point in the array connects back to the first point.

You can assume:

The polygon will be a valid simple polygon. That is, it will have at least three points, none of its edges will cross each other, and exactly two edges will meet at each vertex.

In the tests, the point will never fall exactly on an edge of the polygon.

Testing
To help you visualize your test cases, the showAndTest(poly,point,inside) function is preloaded. It draws the polygon and point and then calls Test.expect automatically.

So if you call:

showAndTest([[-5, -5], [5, -5], [0, 5]], [0,0], true)
then you'll see:

The drawing window is 14x14 units wide and centered at the origin.
*/
function pointInPoly(poly, point) {
  let n = poly.length;
  let [x, y] = point;
  let inside = false;
  for (let i = 0, xi, yi, xj, yj, intersect, j = n - 1; i < n; j = i++) {
    [xi, yi] = poly[i];
    [xj, yj] = poly[j];
    if (yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)
      // intersect
      inside = !inside;
  }
  return inside;
}
