/*
Description:
This is simply the pythagorean theorum, to find the hypotenuse of a triangle, or a leg. If you do not know what the pythagorean theorum is, it is simply a^2 + b^2 = c^2. a and b are the leg lengths, and c is the hypotenuse length. You will also determine if a triangle is a right triangle.
*/
function findHypotenuse(leg1, leg2) {
  return Math.hypot(leg1, leg2)
}

function findLeg(leg1,hypotenuse) {
  return Math.sqrt(hypotenuse*hypotenuse-leg1*leg1)
}

function isRightTriangle(a,b,c) {
  let max = Math.max(a, b, c);
  let sum = a + b + c;
  return sum - max > max;
}
