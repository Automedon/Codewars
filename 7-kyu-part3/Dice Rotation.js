/*
There are any number of dice, and the input array contains the number on the dice's face up.

A dice is 6 faced.
Calculate the total number of minimum rotations of dice, to make all faces the same.

1 will require only one rotation to have 2, 3, 4 and 5 face up, but would require minimum two rotations to make it the face 6, as 6 is the opposite side of 1.

The opposite side of 2 is 5 and 3 is 4.

For example:

dieArray = {1,1,6}, Answer = 2. Rotate 6 two times to get 1.

dieArray = {1,2,3}, Answer = 2. Rotate 1 and 2 and make them 3 (or make them all 1 or 2 as all three would require the same number of rotations.

dieArray = {3, 3, 3}, Answer = 0.

dieArray = {1,6,2,3}, Answer = 3. Rotate 1, 6 and 3 to make them all 2.
*/

function rotations(a){
  let d = {1:6,2:5,3:4,4:3,5:2,6:1}
  return a.length ? Math.min(...[...new Set(a)].map(e=>a.reduce((a,c)=>a+(e===c?0:d[c]===e?2:1),0))) : 0
}
