/*
Description:
Task
Let's call a string cool if it is formed only by Latin letters and no two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is cool.

Input/Output
[input] string s

A string that contains uppercase letters, lowercase letters numbers and spaces.

1 ≤ s.length ≤ 20.

[output] a boolean value

true if s is cool, false otherwise.

Example
For s = "aQwFdA", the output should be true

For s = "aBC", the output should be false;

For s = "AaA", the output should be true;

For s = "q q", the output should be false.
*/
function coolString(s) {
  s = s.replace(/ /g, "");
  if (s.length <= 1) return false;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i].toLowerCase() && s[i + 1] === s[i + 1].toLowerCase())
      return false;
    if (s[i] === s[i].toUpperCase() && s[i + 1] === s[i + 1].toUpperCase())
      return false;
  }
  return true;
}
