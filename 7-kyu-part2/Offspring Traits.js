/*
Description:
A population of bears consists of black bears, brown bears, and white bears.

The input is an array of two elements.

Determine whether the offspring of the two bears will return 'black', 'brown', 'white', 'dark brown', 'grey', 'light brown', or 'unknown'.

Elements in the the array will always be a string.

Examples:
bear_fur(['black', 'black'])  returns 'black'

bear_fur(['brown', 'brown'])  returns 'brown'

bear_fur(['white', 'white'])  returns 'white'

bear_fur(['black', 'brown'])  returns 'dark brown'

bear_fur(['black', 'white'])  returns 'grey'

bear_fur(['brown', 'white'])  returns 'light brown'

bear_fur(['yellow', 'magenta'])  returns 'unknown'
*/
const bearFur = bears => {
  if (bears.every(v => v === bears[0])) return bears[0];
  if (bears.some(v => v === "black") && bears.some(v => v === "brown"))
    return "dark brown";
  if (bears.some(v => v === "black") && bears.some(v => v === "white"))
    return "grey";
  if (bears.some(v => v === "brown") && bears.some(v => v === "white"))
    return "light brown";
  return "unknown";
};
