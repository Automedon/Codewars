/*
Description:
Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.
*/
function charToAscii(string) {
  if (string.length === 0) return null;
  string = string.replace(/[^a-z]/gi, "");
  const keys = [...new Set(string)];
  const values = [...keys].map(v => v.charCodeAt(0));
  const obj = {};
  keys.map((v, i) => (obj[v] = values[i]));
  return obj;
}
