/*
Description:
Sometimes when working with angles we find degrees to be the way to go, but other times (especially when using js canvas) radians come into play. The Math object in javascript does not contain any functionality that make it easy to work between both radians and degrees. So let's make it happen!

Using the knowledge that:

(pi) π Radians === 180 Degrees 
Add two methods to the Global Math Object:

1. toRadians : takes an argument in degrees and converts it to radians.
2. toDegrees : takes an argument in radians and converts it to degrees.
The Math.PI javascript property should be used in the calculation.

Note :

all answers are rounded UP or DOWN to the third decimal place A
toFixed(3)
mind that the output must be a number NOT a string.
Ex :

  3.2235554001...                -> 3.224  (Round up)
  3.201324                       -> 3.201  (Round down)
  3.210                          -> 3.21
  3.100                          -> 3.1  
 -3.000                          -> -3
   3                             ->  3
All tests are valid numbers so no need to write conditions for invalid arguments or null. However, both NEGATIVE degrees and radians will be tested for in the solutions.

References:

Radians -

https://en.wikipedia.org/wiki/Radian
Degrees -

https://en.wikipedia.org/wiki/Degree_(angle)
Radians to Degrees -

https://www.khanacademy.org/math/trigonometry/unit-circle-trig-func/radians_tutorial/v/we-converting-radians-to-degrees
Degrees to Radians -

https://www.khanacademy.org/math/trigonometry/unit-circle-trig-func/radians_tutorial/v/we-converting-degrees-to-radians
Math.PI -

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
*/
Math.toRadians = function(degrees) {
  return degrees / (180 / Math.PI);
};
Math.toDegrees = function(radians) {
  return radians * (180 / Math.PI);
};
