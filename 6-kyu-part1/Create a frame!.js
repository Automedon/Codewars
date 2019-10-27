/*
Description:
*************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************
Given an array of strings and a character to be used as border, output the frame with the content inside.

Notes:

Always keep a space between the input string and the left and right borders.
The biggest string inside the array should always fit in the frame.
The input array is never empty.
Example
frame(['Create', 'a', 'frame'], '+')

Output:

++++++++++
+ Create +
+ a      +
+ frame  +
++++++++++
*/
const frame = (text, char) => {
  let max = Math.max(...text.map(v => v.length));
  let top = char.repeat(max + 4);
  return (
    top +
    `\n` +
    text.map(v => `${char} ` + v + " ".repeat(max - v.length) + ` ${char}`)
      .join`\n` +
    `\n` +
    top
  );
};
