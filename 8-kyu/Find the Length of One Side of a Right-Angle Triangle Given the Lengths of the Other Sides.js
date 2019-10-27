/*
Description:
Pythagoras' theorem states that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. For everyone like me who hasn't used Pythagoras' theorem for a long time, basically given the length of the legs of a right angle triangle (the legs of the triangle are connected to the right angle), write a function that returns the length of the third side (the hypotenuse - it's the side facing the right angle and not connected to it by either end).
*/
function pythagorean(sideA, sideB){
  return Math.hypot(sideA,sideB)
}
