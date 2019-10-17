/*
Given two ordered pairs calculate the distance between them. Round to two decimal places. This should be easy to do in 0(1) timing.
*/
function distance(x1, y1, x2, y2){
  return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)).toFixed(2)*1
}
