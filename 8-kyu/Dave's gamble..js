/*
Description:
My mate Dave LOVES gambling. He goes to the horse races every Saturday and bets money on which horses will finish FIRST, SECOND and THIRD place.

I'm a good friend, so I said I'd help him figure out how many different ways the gold, silver and bronze could be handed out to the competitors so he can calculate his odds of winning.

Problem is, Dave never knows how many horses will be entering the race until he gets to the track. I guess I'll have to design a funciton to help me!

Write a programme that can take any number of horses as its only argument and returns the total number of different combinations of competitors winning gold silver and bronze.

For example:

horses(15) 
should return

2730
different combinations of 1st, 2nd and 3rd finishers.

The function should return 'undefined' if the object entered isn't an integer.

If number of horses is <3, the same input should be returned.

If the input is both <3 and not an integer, the function should return undefined.

For example:

horses(4) == 24
horses(1) == 1
*/
function horses(n) {
  if (typeof n !== 'number'||parseInt(n)!==n) return;
  if (n<3) return n
  return n * (n-1) * (n-2);
}
