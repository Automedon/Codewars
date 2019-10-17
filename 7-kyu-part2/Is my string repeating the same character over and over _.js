/*
Description:
Your task is very simple:
Write a function hasOneChar returning:

true if the given string contains the same character repeated all along the string
false otherwise.
For instance:

hasOneChar('aaaaa'); //true
hasOneChar('aaaab'); //false
hasOneChar('bbbbb'); //true
hasOneChar('bbabb'); //false
Of course, what comes in mind first is a loop. But the purpose of this Kata is to test your creativity.
You have to achieve it without using any loops.

Corner cases: the function hasOneChar should return true if the string contains one single character.

Be creative!
*/
function hasOneChar(s) {
  return [...new Set(s)].length===1
}
