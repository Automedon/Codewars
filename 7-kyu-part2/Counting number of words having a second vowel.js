/*
Description:
Let's count the numbers of words having a second vowels in a string! For a given string, write a function that returns the number of words having a second vowel.

Example : countVowels("range represented by a node is completely inside the given range") ==> 7 countVowels("help me god") ==> 0 ; no words have a second vowel
*/
function countVowels(string) {
  return string
    .split(` `)
    .filter(
      v => v.match(/[aeiou]/gi) !== null && v.match(/[aeiou]/gi).length > 1
    ).length;
}
