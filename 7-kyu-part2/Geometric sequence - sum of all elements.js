/*
Description:
In Your class You have started lessons about Geometric Progression Because You are also a programmer, You have decided to write a function geometric_sequence_sum(a, r, n) that will print SUM of the first n elementh of the sequence with the given constant r and first elementh a

For example geometric_sequence_sum(2, 3, 5)

Should return: 242

More info: https://en.wikipedia.org/wiki/Geometric_progression
*/
function GeometricSequenceSum(a, r, n) {
  return (a * (1 - Math.pow(r, n))) / (1 - r) || a * n;
}
