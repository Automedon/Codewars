/*
Description:
source: imgur.com

We have a robot that was programmed to take only four directions: up, ('U'), down ('D'), right ('R'), left ('L').

It takes one direction at a time randomly and for each direction that takes, it moves a distance equal to 'length_step'. The field where the robot "walks" has no border lines or limits.

You can see the movement of the robot from a starting point (0, 0) and doing 100 steps. (click "Run"): (Go to https://trinket.io/python/af9037fb12 if you don't see the animation)


We want to calculate the final distance from an initial position.

For that we have to make the function finaldist_crazyrobot() that receives:

a list of tuples(python)(or an array of arrays javascript, ruby), moves. Each tuple (array ,js and ruby) having a direction and the length of the step.

the initial position, init_pos, that are the coordinates (x0, y0) of the point where the robot is standing before it starts moving.

Let's see an example in Python

init_pos = (0, 0)
moves = [('R', 2), ('U', 3), ('L', 1), ('D', 6)]
finaldist_crazyrobot(moves, init_pos) == 3.16227766017
In javascript:

init_pos = [0, 0]
moves = [['R', 2], ['U', 3], ['L', 1], ['D', 6]]
finalDistCrazyRobot(moves, init_pos) == 3.16227766017
In ruby:

init_pos = [0, 0]
moves = [['R', 2], ['U', 3], ['L', 1], ['D', 6]]
finaldist_crazyrobot(moves, init_pos) == 3.16227766017
We read the moves of the above example as it follows:

The robot moves to the right a step two units long.
Then, it goes up a step three units long.
After, it moves to the left one unit length.
And finally, it goes down six units of length.
The final point where the robot stops has coordinates (1, -3).

So, the distance between (0, 0) and (1, -3) is 3.16227766017

Of course that the initial position may be different from [0, 0]. Let's see a case in Python:

init_pos = (20, 18)
moves = [('R', 32), ('D', 16), ('U', 31), ('L', 26), ('D', 14),('U', 4), ('R', 5), ('L', 16)]
finaldist_crazyrobot(moves, init_pos) == 7.07106781187
# distance from (20, 18) to (15, 23)
In javacript:

init_pos = [20, 18]
moves = [['R', 32], ['D', 16], ['U', 31], ['L', 26], ['D', 14],['U', 4], ['R', 5], ['L', 16]]
finalDistCrazyRobot(moves, init_pos) == 7.07106781187
In ruby:

init_pos = [20, 18]
moves = [['R', 32], ['D', 16], ['U', 31], ['L', 26], ['D', 14],['U', 4], ['R', 5], ['L', 16]]
finaldist_crazyrobot(moves, init_pos) == 7.07106781187
# distance from [20, 18] to [15, 23]
You do not have to round your result, the tests will do it for you.

Your results will be compared to expected ones in terms of relative error.

For this problem, our distances will be always positive.

Our list, moves may be up to a thousand long.

The units may be feet or meters. Our robot was programmed to "read" both English and International System.

Enjoy iy!!

(But, what a waste of money just to have a robot to do this.)
*/
function finalDistCrazyRobot(moves, initPos) {
    let [x,y] = initPos
    for (let i=0;i<moves.length;i++){
      if (moves[i][0]==='R'){
        y+=moves[i][1]
      } else if (moves[i][0]==='U'){
        x+=moves[i][1]
      } else if (moves[i][0]==='L'){
        y-=moves[i][1]
      } else if (moves[i][0]==='D'){
        x-=moves[i][1]
      } 
    }
    let [x1,y1]=initPos
    return Math.hypot(x-x1,y-y1)
}
