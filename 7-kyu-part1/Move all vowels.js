/*
Description:
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/
function moveVowel(input) {
  const arr1 = [];
  const arr2 = [];
  input.split("").map(v => (v.match(/[aeiou]/i) ? arr1.push(v) : arr2.push(v)));
  return arr2.concat(arr1).join("");
}
