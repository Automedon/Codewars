/*
Description:
Following on from [Points of Reflection(https://www.codewars.com/kata/points-of-reflection), given a number of points and a single midpoint, a 2D shape can be inferred.

Task:

You will be given two inputs. The first will be a two-dimensional array in which the inner arrays contain two elements representing partial coordinates of a 2D shape. The second input will be a two-element array representing the shape's mid-point. Using the existing coordinates and the mid-point, return the complete shape as a two-dimensional array.
*/
let symmetricShape = (shape, [x0, y0]) =>
  shape.concat(shape.map(([x1, y1]) => [2 * x0 - x1, 2 * y0 - y1]));
