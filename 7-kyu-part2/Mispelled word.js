/*
Description:
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
It checks if the word2 differs from word1 by only one character.

This can include an extra char at the end or the beginning of either of words.

In the tests, the mispelled word will always differ only by one character.
*/
var mispelled = function(word1, word2) {
  if (word1.length < word2.length) {
    let temp = word1;
    word1 = word2;
    word2 = temp;
  }
  let count = 0;
  for (let i = 0, j = 0; i < word1.length; i++, j++) {
    if (word1[i] !== word2[j]) {
      count++;
      if (word1.length > word2.length) {
        i++;
      }
    }
  }
  return count < 2;
};
