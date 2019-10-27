/*
Description:
Write a simple function that takes polar coordinates (an angle in degrees and a radius) and returns the equivalent cartesian coordinates (rouded to 10 places).

For example:

coordinates(90,1)
=> (0.0, 1.0)

coordinates(45, 1)
=> (0.7071067812, 0.7071067812)
*/

function coordinates(degrees, radius) {
  let rad = (degrees * Math.PI) / 180;
  let x = Math.abs(+(radius * Math.cos(rad)).toFixed(10));
  let y = Math.abs(+(radius * Math.sin(rad)).toFixed(10));
  return [x, y];
}
