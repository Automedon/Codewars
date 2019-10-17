/*
Description:
horizon
One day when I was laying on a beach I thought: "How far is it to the visible horizon?" When we go up to the mountains we can see a lot more. Let's make a function to figure out the distance.

Input for function will be:
h - height of eyes of the observer above sea level (in meters);
r - radius of the planet (in meters).
Expected output:
distance to the visible horizon (in meters), rounded exactly to 1 digit after the decimal point, typeof == 'number'. Example: "100.0"
*/
const horizonDistance = (h, r) => {
  return Math.sqrt(h * (2 * r + h)).toFixed(1) * 1;
};
