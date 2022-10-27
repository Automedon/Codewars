/*
Description:
You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.
You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.

Also, the cat cannot jump over the dog.

So:

if j = 5:

..C.....m. returns 'Caught!' <-- not more than j characters between

.....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough

if j = 10:

...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog

...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

Finally, if all three animals are not present, return 'boring without all three'
*/
function catMouse(x, j) {
  if (!x.includes("D") || !x.includes("C") || !x.includes("m"))
    return "boring without all three";
  if (Math.abs(x.indexOf("C") - x.indexOf("m")) > j) return "Escaped!";
  if (x.replace(/\./g, "") === "CDm" || x.replace(/\./g, "") === "mDC")
    return "Protected!";
  return "Caught!";
}
