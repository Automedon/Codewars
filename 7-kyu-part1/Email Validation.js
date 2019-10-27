/*
Description:
Write a function to test whether a given input is a valid email address.

For the purposes of this kata, here is what makes a valid email:

At least one letter character at the beginning
All characters between the first character and the @ (if any) must be letters, numbers, or underscores
There must be an @ character (after the points listed just now)
After the @ character, there must be at least one word character (letter, number, or underscore) or hyphen
The email must end with at least one set of a dot followed by one or more word characters.
The input must NOT be case-sensitive
The function should return true or false.
*/
function validate(input) {
  return /^[a-zA-Z]\w*@[\w-]+\.[\w\.]+$/.test(input);
}
