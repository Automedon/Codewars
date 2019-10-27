/*
Description:
Task
Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
Good luck!
*/
const ultimateReverse = s => {
  let str = s
    .join("")
    .split("")
    .reverse();
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(str.splice(0, s[i].length).join(""));
  }
  return arr;
};
