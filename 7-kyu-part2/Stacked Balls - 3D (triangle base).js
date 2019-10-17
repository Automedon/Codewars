/*
Description:
Background
I have stacked some cannon balls in a triangle-based pyramid.

Like this,

cannon balls triangle base
Kata Task
Given the number of layers of my stack, what is the total height?

Return the height as multiple of the ball diameter.

Example
The image above shows a stack of 3 layers.

Notes
layers >= 0
approximate answers (within 0.001) are good enough
*/
function stackHeight3d(layers) {
  return layers > 0 ? Math.sqrt(2 / 3.0) * (layers - 1) + 1 : 0;
}
