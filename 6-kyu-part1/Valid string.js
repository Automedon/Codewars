/*
Description:
You are given an array of valid words and a string. Test if the string is made up by one or more words from the array. For example:

string[] dictionary = ["code", "wars"]; 

string s = "codewars"; // true 

string s1 = "codewar"; // false
*/
var validWord = function(d, word) {
  d = d.sort((a, b) => a.length - b.length);
  for (let i = 0; i < d.length; i++) {
    word = word.replace(new RegExp(d[i], "g"), "");
  }
  return !word.length;
};
