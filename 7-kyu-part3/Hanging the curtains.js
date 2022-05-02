/*
Intro:
Imagine that you are given a task to hang a curtain of known length (length) on a window using curtain hooks. It is required of you that the spacing (distance) between each hook is uniform throughout the whole curtain and is lower than or equal to provided distance (max_hook_dist). However you are NOT allowed to use any measuring device or method. How should you do it? How many curtain hooks would you need?
Shorthand:
Given the length of the curtain length and a maximum uniform distance between curtain hooks max_hook_dist write a function that returns the number of curtain hooks required in order to hang a curtain in a described way.
Definitions:
length - The length of the curtain. Always positive.
max_hook_dist - Maximum uniform distance between curtain hooks [1,100] (assume that curtain hooks have no thickness and can be fixed anywhere throughout the curtain). Can be higher than the length of the curtain.
Measuring device/method - Any measuring method or type of a meter (ruler, fingers, etc.) which could be used to measure the distance between the hooks is not allowed. Use maths instead.
P.S. I hope this kata will change the number of curtain hooks you use when hanging your own curtains :)
*/

function numberOfHooks(length, maxHookDist) {
  return 2 ** Math.ceil(Math.log2(length / Math.min(length, maxHookDist))) + 1;
}
