/*
Description:
Bob is a theoretical coder - he doesn't write code, but comes up with theories, formulas and algorithm ideas. You are his secretary, and he has tasked you with writing the code for his newest project - a method for making the short form of a word. Write a function shortForm(C# ShortForm, Python short_form) that takes a string and returns it converted into short form using the rule: Remove all vowels, except for those that are the first or last letter. Do not count 'y' as a vowel, and ignore case. Also note, the string given will not have any spaces; only one word, and only Roman letters. 
Example:

shortForm("assault");
short_form("assault")
ShortForm("assault");
// should return "asslt"


Also, FYI: I got all the words with no vowels from 
https://en.wikipedia.org/wiki/English_words_without_vowels
*/
function shortForm(str) {
  let output = "";
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i].match(/[^aeuio]/i)) {
      output += str[i];
    }
  }
  return str[0] + output + str[str.length - 1];
}
