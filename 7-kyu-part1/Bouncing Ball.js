/*
Description:
You drop a ball from a given height. After each bounce, the ball returns to some fixed proportion of its previous height. If the ball bounces to height 1 or less, we consider it to have stopped bouncing. Return the number of bounces it takes for the ball to stop moving.

bouncingBall(initialHeight, bouncingProportion)

boucingBall(4, 0.5)
After first bounce, ball bounces to height 2
After second bounce, ball bounces to height 1
Therefore answer is 2 bounces

boucingBall(30, 0.3)
After first bounce, ball bounces to height 9
After second bounce, ball bounces to height 2.7
After third bounce, ball bounces to height 0.81
Therefore answer is 3 bounces

Initial height is an integer in range [2,1000]

Bouncing Proportion is a decimal in range [0, 1)
*/
function bouncingBall(initial, proportion, n = 0) {
  if (initial <= 1) return n;
  initial *= proportion;
  n += 1;
  return bouncingBall(initial, proportion, n);
}
