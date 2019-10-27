/*
Description:
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
This is a positive triangle:

   o   
  o o  
 o o o 
Turn it into an inverted triangle. How many points need to be moved at least?

   o     How many points     o o o
  o o    --------------->     o o
 o o o   need to be moved      o
Task
Complete function leastMove. An argument side will be given. It's the side length of the triangle. You need to calculate and return the minimum number of moves.

Some examples:
 leastMove(2) === 1

   o         +---- o
  o o   ---> |    o o   --->  o o
             +---> x           o

 leastMove(3) === 2

   o         +--> x o x <--+       o o o
  o o   ---> |     o o     |  --->  o o
 o o o       +--- o o o ---+         o

 leastMove(4) === 3

   o                  o --------+  
  o o   --->  +--> x o o x <--+ | ---> o o o o
 o o o        |     o o o     | |       o o o
o o o o       +--- o o o o ---+ |        o o
                      x <-------+         o

 leastMove(9) === 15 

         a
        a a
       a a a
x x x o o o o y y     6 a move to 6 x
 x x o o o o o y
  x o o o o o o       3 b move to 3 y
   o o o o o o c
  b o o o o o c c     6 c move to 6 z
 b b o o o o c c c
      z z z
       z z
        z


 leastMove(50) === 425 
 No "image" here ;-) Please find a way to calculate it.
Note: This is a math problem. 2 <= side <= 100000
*/
function leastMove(side) {
  return Math.floor((side * (side + 1)) / 6);
}
