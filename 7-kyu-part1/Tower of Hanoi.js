/*
The Tower of Hanoi problem involves 3 towers. A number of rings decreasing in size are placed on one tower. All rings must then be moved to another tower, but at no point can a larger ring be placed on a smaller ring.

Your task: Given a number of rings, return the MINIMUM number of moves needed to move all the rings from one tower to another.

Reference: Tower of Hanoi, Courtesy of Coolmath Games

NB: This problem may seem very complex, but in reality there is an amazingly simple formula to calculate the minimum number. Just Learn how to solve the problem via the above link (if you are not familiar with it), and then think hard. Your solution should be in no way extraordinarily long and complex. The Kata ranking is for figuring out the solution, but the coding skills required are minimal.
*/

function towerOfHanoi(n) {
  return 2 ** n - 1;
}
