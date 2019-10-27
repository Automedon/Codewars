/*
Description:
The alphabetized kata
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"
Inspired by Tauba Auerbach
*/
function alphabetized(s) {
  var ans = "";
  for (var i = 97; i < 123; ++i)
    for (var j = 0; j < s.length; j++)
      if (s[j].toLowerCase().charCodeAt() == i) ans += s[j];
  return ans;
}
