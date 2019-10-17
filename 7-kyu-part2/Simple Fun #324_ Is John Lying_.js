/*
Instructions
Output
Task
John and Alice have an appointment today.

In the morning, John starts from (0,0) and goes to the place (a,b) where he is dating. Unfortunately, John had no sense of direction at all, so he moved 1 step in a random direction(up, down, left or right) each time. For example, if John at (x,y), next step he may move to (x+1,y), (x-1,y),(x,y+1) or (x,y-1).

Obviously, when he arrived at the destination, it was already too late and Alice had already left. It's a sadly story :(

The second day, Alice asked John why he didn't go to the dating place. John said he took s steps to his date yesterday.

Alice wants to know whether John is lying. Please help Alice to judge.

Given two coordinates a, b and the step s, return true if John tells the truth, false otherwise.

Input/Output
[input] integer a

The x-coordinates of the dating site.

-10^7 <= a <= 10^7

[input] integer b

The y-coordinates of the dating site.

-10^7 <= b <= 10^7

[input] integer s

A positive integer. The steps John using.

0 < s <= 10^9

[output] a boolean value

return true if John tells the truth, false otherwise.

Example
For a = 3, b = 3, s = 6, the output should be true.

A possible path is:

(0,0) -> (0,1) -> (0,2) -> (0,3) -> (1,3) -> (2,3) -> (3,3)

For a = 3, b = 3, s = 8, the output should be true.

A possible path is:

(0,0) -> (0,1) -> (1,1) -> (1,2) -> (2,2) -> (2,1) -> (3,1) -> (3,2) -> (3,3)

For a = 4, b = 5, s = 10, the output should be false.

John can't reach coordinates (a, b) using 10 steps, he's lying ;-)
*/
function isJohnLying(a,b,s){
  const c = Math.abs(a) + Math.abs(b);
  if (c % 2 === s % 2 && s >= c) return true;
  return false;
}
