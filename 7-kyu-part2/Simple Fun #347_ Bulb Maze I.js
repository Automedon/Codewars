/*
Description:
You walk in a maze. You need to reach the exit through many rooms. These rooms are in a straight line.

You can only walk in the dark. Otherwise, you will be caught by the enemy.

Your trouble is that some rooms have light bulbs. If the light bulb is bright when you enter the room. You were caught by the enemy.

Fortunately, the status of these bulbs (on/off) is aoto-switched every minute. So you have a chance to go through the maze.

Task
Let's us use a string map to represent these rooms， like this: "xo oxox".

"x" means there is a bulb in the room, and its initial status is off;

"o" means there is a bulb in the room, and its initial status is on;

" "(space) means a room without bulb, it's always dark.

Your task is to determine if you can go through the maze. Return true if you can, false otherwise.

Note
Your initial position is the most left, the exit position is the most right.

Your moving speed is 1 minute per step. You can not stop before you start your moving until you reach the exit.

Examples
For map = "xo oxox". The output should be true.

step 0 :  xo oxox
          ^ <--------You are here
step 1 :  ox xoxo
           ^ <--------You are here
step 2 :  xo oxox
            ^ <--------You are here
step 3 :  ox xoxo
             ^ <--------You are here
step 4 :  xo oxox
              ^ <--------You are here
step 5 :  ox xoxo
               ^ <--------You are here
step 6 :  xo oxox
                ^ <--------You are here
step 7 :  ox xoxo
                 ^ <--------You've go through the maze :)
For map = "xo oxox". The output should be false.

step 0 :  xo  oxox
          ^ <--------You are here
step 1 :  ox  xoxo
           ^ <--------You are here
step 2 :  xo  oxox
            ^ <--------You are here
step 3 :  ox  xoxo
             ^ <--------You are here
step 4 :  xo  oxox
              ^ <--------You were caught by the enemy :(
Happy Coding ^_^
*/
function bulbMaze(map){
  for(let i=0;i<map.length;i++){
    if (map[i]!=='x'&&map[i]!==' ') return false
    map=map.replace(/x|o/g,v=>v==='x'?'o':'x')
  }
  return true
}
