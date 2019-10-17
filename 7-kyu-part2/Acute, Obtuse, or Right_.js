/*
Description:
In this Kata, you will be given an array of side lengths for a triangle.Your job is to figure out whether the triangle should be classified as Right, Acute, or Obtuse. To learn more about Right, Acute, or Obtuse triangles see here - Acute and Obtuse Triangles

Recall that a in a right triangle, one of the three angles has a value of 90°, in an obtuse angle one of the three angles has a value greater than 90°, and in an acute triangle all three of the angles have measures less than 90°.

The array given will always contain 3 positive integers, and the order of the integers may be random. The side lengths may not produce a valid triangle.

Recall that the sum of the 2 shortest sides of the triangle must be greater than the largest side (hypotenuse) in order for a triangle to be considered valid.

Your function will contain a single array as an argument, such as -

function obtRhtAct([SIDE_LEN_1,SIDE_LEN_2,SIDE_LEN_3]) {
    //your code here
    return -1
}
Your function should return the following values -

if (triangle is obtuse) => 0
if (triangle is right) => 1
if (triangle is acute) => 2
if (triangle is invalid) => -1
*/
function obtRhtAct(arr) {
  let [a, b, c] = arr.sort((a, b) => a - b);
  if (!isTriangle(a, b, c)) return -1;
  if ((c * c) / 2 < a * a + b * b && a * a + b * b < c * c) return 0;
  if (
    a ** 2 + b ** 2 > c ** 2 &&
    a ** 2 + c ** 2 > b ** 2 &&
    c ** 2 + b ** 2 > a ** 2
  )
    return 2;
  return 1;
}
function isTriangle(a, b, c) {
  let max = Math.max(a, b, c);
  let sum = a + b + c;
  return sum - max > max;
}
