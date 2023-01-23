/*
Description:
#Detail

Countdown is a British game show with number and word puzzles. The letters round consists of the contestant picking 9 shuffled letters - either picking from the vowel pile or the consonant pile. The contestants are given 30 seconds to try to come up with the longest English word they can think of with the available letters - letters can not be used more than once unless there is another of the same character.

#Task

Given an uppercase 9 letter string, letters, find the longest word that can be made with some or all of the letters. The preloaded array words (or $words in Ruby) contains a bunch of uppercase words that you will have to loop through. Only return the longest word; if there is more than one, return the words of the same lengths in alphabetical order. If there are no words that can be made from the letters given, return None/nil/null.

##Examples

letters = "ZZZZZZZZZ"
longest word = None

letters = "POVMERKIA", 
longest word = ["VAMPIRE"]

letters = "DVAVPALEM"
longest word = ["VAMPED", "VALVED", "PALMED"]
*/

function longestWord(letters) {
  let dict = letters.split``.reduce((a, b) => ((a[b] = a[b] + 1 || 1), a), {});
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    let c = { ...dict };
    for (let j = 0; j < words[i].length; j++) {
      if (c[words[i][j]]) {
        if (c[words[i][j]] > 0) {
          c[words[i][j]]--;
          if (j === words[i].length - 1) {
            arr.push(words[i]);
          }
        } else {
          break;
        }
      } else {
        break;
      }
    }
  }
  if (arr.length === 0) return null;
  let max = Math.max(...arr.map(v => v.length));
  return arr.filter(v => v.length === max);
}
