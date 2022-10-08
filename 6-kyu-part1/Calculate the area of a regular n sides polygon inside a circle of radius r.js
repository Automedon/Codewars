/*
Description:
Write the following function:

function areaOfPolygonInsideCircle(circleRadius, numberOfSides)
It should calculate the area of a regular polygon of numberOfSides or number_of_sides sides inside a circle of radius circleRadius or circle_radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle). The answer should be a number rounded to 3 decimal places.

Input :: Output Examples
areaOfPolygonInsideCircle(3, 3) // returns 11.691

areaOfPolygonInsideCircle(5.8, 7) // returns 92.053

areaOfPolygonInsideCircle(4, 5) // returns 38.042
*/
function areaOfPolygonInsideCircle(r, s) {
  let angle = Math.PI / s;
  let area = (r * r * s * Math.sin(angle * 2)) / 2;
  return +area.toFixed(3);
}
