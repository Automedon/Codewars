/*
Description:
Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.
*/

function reverseAndMirror(s1, s2) {
  const arr = s1
    .split("")
    .map(v => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()));
  const arr1 = s2
    .split("")
    .map(v => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()))
    .reverse()
    .join("");
  const arr2 = arr.join("");
  const arr3 = arr.reverse().join("");
  return arr1 + "@@@" + arr3 + arr2;
}
