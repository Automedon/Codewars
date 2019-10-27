/*
Description:
Calculate the bearing angle between two 2D cartesian points (x1,y1) and (x2,y2) :

Ref :

http://mathforum.org/library/drmath/view/62034.html

Notes :

arguments are all valid
round the result down to the nearest integer
*/
function angle(x1, y1, x2, y2) {  
  return Math.trunc((Math.atan2((y2-y1),(x2-x1)) * 180) / Math.PI)
}
