/*
Description:
You're a pirate. Arrr!

Your task is to steer the pirate ship to the designated location.

Return the direction (left / right) and the angle of how much the ship needs to be turned (in degrees).

More Info:

The ship will always start at Cartesian Coordinate (0,0) facing North.
If the angle is 0 or 180, the direction does NOT matter
Round the result to 2 decimal places if necessary
Examples:

steer(1,1)   => "R: 45"  // turn right for 45 degrees
steer(1,0)   => "R: 90"  // turn right for 90 degrees
steer(-1,-1) => "L: 135" // turn left for 135 degrees
*/
var steer = function(x, y) {
  let a = 90 - Math.atan2(y, x) * (180 / Math.PI);
  let r = a > 180 ? 360 - a : a;
  return `${a < 0 || a > 180 ? "L" : "R"}: ${Math.abs(
    Math.round(r * 100) / 100
  )}`;
};
