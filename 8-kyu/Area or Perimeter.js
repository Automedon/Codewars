/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. 
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6 , 10) --> 32
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/
const areaOrPerimeter = function(l , w) {
  if (l===w) return l*w
  return 2 * (l+w)
};
