/*
Ever wonder how many keystrokes any given string takes to type? No? Most normal people don't...but we're not normal! :D

Program a num_key_strokes (string) function that takes a string and returns a count of the number of keystrokes that it took to type that string.

For example, Hello, world! takes 15 key strokes to type.

This kata is expecting an EN-US keyboard mapping, specifically using the QWERTY layout.

Rules
This kata assumes that the string was only typed using the main keyboard and NOT a number-pad.
We also assume that the user does not hold down the Shift key and thus has to press it once every time it's needed. In addition, the CAPS LOCK key is not used.
Every character in the input string requires either 1 or 2 keystrokes. Your goal is to figure out which ones belong in which group and count the total number of keystrokes.
Here's a picture of the en-US QWERTY layout :
*/

function numKeyStrokes(text) {
  const two = '~!@#$%^&*()_+{}:|<>?"';
  return text.split(``).reduce((a,b)=>a+(two.includes(b)||b===b.toUpperCase()&&/[A-Z]/.test(b)?2:1),0);
}
