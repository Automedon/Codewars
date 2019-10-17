/*
Description:
A worm is climbing up a bamboo. How long it will be continuing, if every day it`s climbing up the bamboo "x" amount of meters every day, and each night it slides down for "y" meters?

In this kata you have height, up meters, down meters. Write the function, that calculate and return "days".

function climbingTime(height, up, down)
Check arguments to be positive numbers, return false if not.
*/
function climbingTime(height, up, down) {
  if (up <= 0 || down < 0 || height <= 0) return false
   for (var i=up,j=0;;i+=up-down,j++){
   if (i>=height) return j+1
 }
}
