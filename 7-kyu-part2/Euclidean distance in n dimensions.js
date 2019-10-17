/*
Implement a function to calculate the distance between two points in n-dimensional space. The two points will be passed to your function as arrays of the same length (tuples in Python).

Round your answers to two decimal places.
*/
function euclideanDistance(point1, point2) {
  let dist = 0;
  if (point1.length != point2.length) return -1;
  for (let i = 0; i < point1.length; i++) {
    dist += Math.pow(point1[i] - point2[i], 2);
  }
  return Math.round(Math.sqrt(dist) * 100) / 100;
}
