/*
Description:
Carpe Diem! Yolo! On Fleek? Crushing it. You've got some awesome phrases that you want to hang up on your wall. The problem is that you don't have any frames laying around. So instead, you decide to write a program to create your frame.

Write a function called frame that will take two parameters as input: a phrase and optionally a character for the border of the frame.

frame("Yolo", '@');
Returns:

@@@@@@@@
@      @
@ Yolo @
@      @
@@@@@@@@
Notice that the framed phrase has a single space to the left and to the right. Also, there is an empty line both above and below the phrase.

If a second parameter is not given, assume the frame should be decorated using the * character.

You can assume that all phrases are a single line (no new line characters), and that the second parameter to the function (the frame character) is always a single character.

If an empty string is passed in, return an emtpy frame. For example:

frame("");
returns:

****
*  *
*  *
****
*/
function frame(phrase, ch = "*") {
  if (!phrase) return "****\n*  *\n*  *\n****";
  let l = phrase.length + 4;
  let f = ch.repeat(l);
  let s = ch + " ".repeat(l - 2) + ch;
  let str =
    f + "\n" + s + "\n" + ch + " " + phrase + " " + ch + "\n" + s + "\n" + f;
  return str;
}
