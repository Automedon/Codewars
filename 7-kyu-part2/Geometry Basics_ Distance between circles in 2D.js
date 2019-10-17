/*
Description:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius which is a number.

Write a function calculating distance between Circle a and Circle b.

If they're overlapping or one is completely within the other, just return zero.

Tests round answers to 6 decimal places, so you don't need to round them yourselves.
*/
function distanceBetweenCircles(a, b){
  const distance = ((a.center.x - b.center.x)**2 + (a.center.y - b.center.y)**2)**(0.5) - a.radius - b.radius
  return distance > 0 ? distance : 0
}
