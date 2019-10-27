/*
Description:
Cheesy Cheeseman just got a new monitor, and is dismayed to discover that his old wallpaper no longer fits inside the entire monitor. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily, he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

The Challenge
Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.
*/
function findScreenHeight(w, h) {
  let a = h.split(":");
  return `${w}x${w * (((a[1] * 1) / a[0]) * 1)}`;
}
