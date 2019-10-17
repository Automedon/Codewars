/*
Description
As hex values can include letters A through to F, certain English words can be spelled out, such as CAFE, BEEF, or FACADE. This vocabulary can be extended by using numbers to represent other letters, such as 5EAF00D, or DEC0DE5.

Given a string, your task is to return the decimal sum of all words in the string that can be interpreted as such hex values.

Example
Working with the string BAG OF BEES:

BAG ==> 0 as it is not a valid hex value
OF ==> 0F ==> 15
BEES ==> BEE5 ==> 48869
So hex_word_sum('BAG OF BEES') returns the sum of these, 48884.

Notes
Inputs are all uppercase and contain no punctuation
0 can be substituted for O
5 can be substituted for S
*/
const hexWordSum = string =>
  string
    .replace(/O/g, "0")
    .replace(/S/g, "5")
    .split(" ")
    .reduce(
      (r, el) => r + (parseInt(el.replace(/.*[^ABCDEF05].*/, ""), 16) || 0),
      0
    );
