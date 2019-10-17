/*
Description:
Write a function that will calculate the area of a triangle based on its side lengths.

Ex :

heron(4,13,15) == 24
Note:

all test cases are valid integer sides length of a triangle
https://en.wikipedia.org/wiki/Heron%27s_formula
*/
function heron(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
