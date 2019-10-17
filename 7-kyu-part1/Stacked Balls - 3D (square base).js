/*
Description:
Background
I have stacked some cannon balls in a square pyramid.

Like this,

cannon balls

Kata Task
Given the number of layers of my stack, what is the total height?

Return the height as multiple of the ball diameter.

Example
The image above shows a stack of 4 layers.

Notes
layers >= 0
approximate answers (within 0.001) are good enough
See Also

Stacked Balls - 2D
Stacked Balls - 3D with square base
Stacked Balls - 3D with tringle base
*/

function stackHeight3d(layers) {
  return !layers ? 0 : (layers - 1) / Math.sqrt(2) + 1;
}
