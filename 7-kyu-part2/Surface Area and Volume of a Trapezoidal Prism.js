/*
Description:
Write a function that returns the total surface area and volume of a trapezioidal prism as an array [area, volume], rounded to the nearest integer. A trapezoidal prism is shape that has trapezium (trapezoid) cross sections in one direction and rectangular cross sections in the other directions.

a = top width of trapezium cross section, b = base width of trapezium cross section, h = height of cross section (distance from a to b), l = length of prism.

Diagram of a trapeziodal prism:

http://www.buzzle.com/images/diagrams/trapezoidal-prism.jpg

Trapezium cross section:

        a
    __________      
   /          \    |
  /            \   |h
 /______________\  |
        b
The tapazium cross section has one line of symmetry:

    ____|____
   /    |    \
  /     |     \
 /______|______\
        |
*/
function areaVolume(a,b,h,l) {
  let d = Math.sqrt(h*h+Math.pow((b-a)/2,2))
  return [Math.round(2*(h*(a+b)/2)+a*l+b*l+l*d*2),Math.round(l*h*(a + b)/2)]
}
