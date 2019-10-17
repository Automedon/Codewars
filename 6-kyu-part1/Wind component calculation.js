/*
Description:
When landing an airplane manually, the pilot knows which runway he is using and usually has up to date wind information (speed and direction). This information alone does not help the pilot make a safe landing; what the pilot really needs to know is the speed of headwind, how much crosswind there is and from which side the crosswind is blowing relative to the plane.

Let's imagine there is a system in the ATC tower with speech recognition that works so that when a pilot says "wind info" over the comms, the system will respond with a helpful message about the wind.

Your task is to write a function that produces the response before it is fed into the text-to-speech engine.

Input:

runway (string: "NN[L/C/R]"). NN is the runway's heading in tens of degrees. A suffix of L, C or R may be present and should be ignored. NN is between 01 and 36.
wind_direction (int). Direction wind is blowing from in degrees. Between 0 and 359.
wind_speed (int). Wind speed in knots
Output:

a string in the following format: "(Head|Tail)wind N knots. Crosswind N knots from your (left|right)."
The wind speeds must be correctly rounded integers. If the rounded headwind component is 0, "Head" should be used. Similarly, "right" in case crosswind component is 0.

Calculating crosswind and headwind:

A = Angle of the wind from the direction of travel (radians)
WS = Wind speed
CW = Crosswind
HW = Headwind

CW = sin(A) * WS
HW = cos(A) * WS
More information about wind component calculation: http://en.wikipedia.org/wiki/Tailwind
*/
function windComponents(rwy, windDirection, windSpeed) {
  let n = rwy.match(/\d+/)[0]*10
  let HW = Math.round(Math.cos((((windDirection-n)*Math.PI)/180))*windSpeed)
  let CW = Math.round(Math.sin((((windDirection-n)*Math.PI)/180))*windSpeed)
  let head=true;
  let left=false
  if (HW<0)head=false
  if (CW<0)left=true
  return `${head?'Head':'Tail'}wind ${Math.abs(HW)} knots. Crosswind ${Math.abs(CW)} knots from your ${left?'left':'right'}.`
}
