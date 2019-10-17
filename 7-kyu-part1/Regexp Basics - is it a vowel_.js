/*
Description:
Implement String#vowel? (in Java StringUtils.isVowel(String)), which should return true if given object is a vowel, false otherwise.
*/

String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this);
};
