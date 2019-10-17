/*
Description:
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
*/
function isAlt(word) {
  return word.split("").every((v, i) => {
    if (/[aeiou]/.test(word[0])) {
      if (i % 2 === 0 && /[aeiou]/.test(v)) {
        return true;
      } else if (i % 2 !== 0 && !/[aeiou]/.test(v)) {
        return true;
      } else {
        return false;
      }
    }
    if (!/[aeiou]/.test(word[0])) {
      if (i % 2 == 0 && !/[aeiou]/.test(v)) {
        return true;
      } else if (i % 2 !== 0 && /[aeiou]/.test(v)) {
        return true;
      } else {
        return false;
      }
    }
  });
}
