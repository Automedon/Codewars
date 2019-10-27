/*
Given some points (cartesian coordinates), return true if all of them lie on a line. Treat both an empty set and a single point as a line.

onLine([[1,2], [7, 4], [22, 9]]);                 // returns true
onLine([[1,2], [-3, -14], [22, 9]]);              // returns false
*/
function onLine(points) {
  if (points.length < 3) return true;
  const x = points.shift();
  let a;
  return points
    .filter(function(y) {
      return !(x[0] == y[0] && x[1] == y[1]);
    })
    .map(function(y) {
      return (a = (x[0] - y[0]) / (x[1] - y[1]));
    })
    .every(function(y) {
      return y == a;
    });
}
