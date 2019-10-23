/*
Description:
Given a Date (in JS and Ruby) or hours and minutes (in Python), return the angle between the two hands of a 12-hour analog clock in radians.

Notes:
The minute hand always points to the exact minute (there is no seconds hand).
The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because the hour hand is already half way between 6 and 7.
Return the smaller of the angles ( <= π ).
Return π if the hands are opposite.
Examples
at noon the angle is: 0
at 3:00 the angle is: π/2 (90 degrees)
at 6:00 the angle is: π (180 degrees)
at 9:00 the angle is: π/2 (90 degrees)
*/
function handAngle (date) {
  let m = date.getMinutes()
  let h = date.getHours()
  if (m!==0){
    h=(m/60)+h
  }
  let degree =  Math.abs(h*30-m*6)
  let degree2 = Math.toRadians(360-degree)
  return Math.min(Math.toRadians(degree),degree2)
}
Math.toRadians = function(degrees) {
  return degrees / (180 / Math.PI);
};
