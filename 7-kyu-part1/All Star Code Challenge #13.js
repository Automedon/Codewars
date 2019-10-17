/*
Description:
This Kata is intended as a small challenge for my students

All Star Code Challenge #13

Your friend Billybob has a crush on the girl next to him in class, Emily, but wants to talk with you about what he should do, but doesn't want her to overhear. Send secret messages to Billybob by translating your messages into pig latin.

Create a function, called translate(), that takes a string argument and returns the input string into "pig latin"

The rules to translate into pig latin are as follows:

1) Valid words are 2 or more letters long 2) If a word begins with a consonant (a letter NOT 'a','e','i','o', or 'u'), then that first letter is shifted to the end of the word 3) Then add "ay"

translate("billy"); // => "illybay"
translate("emily"); // => "emilyay"
Note:
If the string input is less than 2 letters, the input should be returned as is
*/

var translate = function(word) {
  if (word.length == 1) return word;
  if (word.length >= 2) {
    if (/[aeiou]/.test(word.slice(0, 1))) return word + "ay";
    return word.slice(1) + word.slice(0, 1) + "ay";
  }
  return "";
};
