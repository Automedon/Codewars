/*
Description:
Your task is to make a program takes in a sentence (without puncuation), adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.

Example
"Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"

becomes

"01234567802856734"

Another example
"the one bumble bee one bumble the bee"

becomes

"01231203"
*/

function compress(sentence) {
  sentence = sentence.toLowerCase();
  const arr = [...new Set(sentence.split` `)];
  return sentence.split` `.map(v=>arr.indexOf(v)).join``;
}
