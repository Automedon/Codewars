/*
Description:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating perimeter of a Triangle defined this way.

Tests round answers to 6 decimal places.
*/
function trianglePerimeter(t){
  let xA=t.a.x;
  let yA=t.a.y;
  let xB=t.b.x;
  let yB=t.b.y;
  let xC=t.c.x;
  let yC=t.c.y;
  let AB=Math.sqrt((xA-xB)*(xA-xB)+(yA-yB)*(yA-yB))
  let BC=Math.sqrt((xC-xB)*(xC-xB)+(yC-yB)*(yC-yB))
  let CA=Math.sqrt((xC-xA)*(xC-xA)+(yC-yA)*(yC-yA))
  return AB+BC+CA
}
