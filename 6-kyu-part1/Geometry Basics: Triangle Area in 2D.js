/*
Description:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating area of a Triangle defined this way.

Tests round answers to 6 decimal places.
*/
function triangleArea(t){
  let a = Math.hypot(t.a.x-t.b.x,t.a.y-t.b.y)
  let b = Math.hypot(t.b.x-t.c.x,t.b.y-t.c.y)
  let c = Math.hypot(t.c.x-t.a.x,t.c.y-t.a.y)
  let p = (a+b+c)/2
  let S = Math.sqrt(p*(p-a)*(p-b)*(p-c))
  return S  
}
