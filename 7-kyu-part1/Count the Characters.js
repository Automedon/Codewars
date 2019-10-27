/*
Description:
The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.

For example:

countChar("fizzbuzz","z") => 4
countChar("Fancy fifth fly aloof","f") => 5
The character can be any alphanumeric character.

Good luck.
*/

function countChar(string, char) {
  return (string.match(new RegExp(char, "ig")) || []).length;
}
