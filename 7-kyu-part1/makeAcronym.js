/*
Description:
Implement a function called makeAcronym that returns the first letters of each word in a passed in string.

Make sure the letters returned are uppercase.

If the value passed in is not a string return 'Not a string'.

If the value passed in is a string which contains characters other than spaces and alphabet letters, return 'Not letters'.

If the string is empty, just return the string itself: "".

EXAMPLES:

'Hello codewarrior' -> 'HC'

'a42' -> 'Not letters'

42 -> 'Not a string'

[2,12] -> 'Not a string'

{name: 'Abraham'} -> 'Not a string'
*/

var makeAcronym = function(string) {
  if (typeof string === "string" && string.match(/[0-9]/g))
    return "Not letters";
  if (typeof string === "string" && !string.match(/[0-9]/g))
    return string
      .split(" ")
      .map(v => v.slice(0, 1).toUpperCase())
      .join("");
  return "Not a string";
};
