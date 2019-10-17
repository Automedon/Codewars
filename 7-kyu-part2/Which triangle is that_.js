/*
Description:
Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

It has to return a string with the type of triangle.
For example:

typeOfTriangle(2,2,1) --> "Isosceles"
*/
var typeOfTriangle = function(sideA, sideB, sideC) {
  if (
    !(sideA + sideB > sideC) ||
    !(sideB + sideC > sideA) ||
    !(sideA + sideC > sideB)
  )
    return "Not a valid triangle";
  if (sideA === sideB && sideB === sideC && sideA === sideC)
    return "Equilateral";
  if (sideA === sideB || sideB === sideC || sideA === sideC) return "Isosceles";
  if ([sideA, sideB, sideC].every(v => typeof v === "number")) return "Scalene";
  return "Not a valid triangle";
};
