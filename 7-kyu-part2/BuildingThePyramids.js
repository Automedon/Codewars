/*
Description:
You are tasked with creating models for constructing a pyramid.
We will use a triangle in place of a pyramid for this model. Given the height and the area of a triangle find the width of the base. Next return the visual representation of the base in a string with "X" for every unit of width.

Your task is to write a pyramid() function that takes as its parameters the height and area of the pyramid.

For example:

pyramid(14, 112) == 'XXXXXXXXXXXXXXXX'
pyramid(6, 24)   == 'XXXXXXXX'
pyramid(32, 512) == 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
*/
function pyramid(height, area) {
  return "X".repeat((area / height) * 2);
}
