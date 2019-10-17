/*
Description:
There is a secret message in the first six sentences of this kata description. Have you ever felt like there was something more being said? Was it hard to figure out that unspoken meaning? Never again! Never will a secret go undiscovered. Find all duplicates from our message!

Your job is to write a function that will find the secret words of the message and return them in order. The words in the secret message should be ordered in the order in which they are found as a duplicate, for example:

'This is a test. this test is fun.' // --> 'this test is'
Notes
The input will always be a string.

If the random tests repeat a word multiple times, it should show up in the secret message only once, based on the position of the first time it was duplicated.

The punctuation and casing of words (uppercase, lowercase) should not matter for the purpose of this kata. We are only concerned with word duplication.
*/
function findSecretMessage(paragraph) {
  let seenWords = {};
  let words = paragraph.toLowerCase().replace(/\W+/g,' ').split(/\s+/);
  let result = "";
  for(let i = 0; i < words.length; i++) {
    if (!seenWords[words[i]]) {
      seenWords[words[i]] = 1;
    } else if(seenWords[words[i]] === 1) {
      result += ' ' + words[i];
      seenWords[words[i]]++;
    } 
  }
  return result.trim();
}
