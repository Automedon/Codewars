/*
Description:
Some languages like Chinese, Japanese, and Thai do not have spaces between words. However, most natural languages processing tasks like part-of-speech tagging require texts that have segmented words. A simple and reasonably effective algorithm to segment a sentence into its component words is called "MaxMatch".

MaxMatch
MaxMatch starts at the first character of a sentence and tries to find the longest valid word starting from that character. If no word is found, the first character is deemed the longest "word", regardless of its validity. In order to find the rest of the words, MaxMatch is then recursively invoked on all of the remaining characters until no characters remain. A list of all of the words that were found is returned.

So for the string "happyday", "happy" is found because "happyday" is not a valid word, nor is "happyda", nor "happyd". Then, MaxMatch is called on "day", and "day" is found. The output is the list ["happy", "day"] in that order.

The Challenge
Write maxMatch, which takes an alphanumeric, spaceless, lowercased String as input and returns an Array of all the words found, in the order they were found. All valid words are in the Set VALID_WORDS, which only contains around 500 English words.

Note: This algorithm is simple and operates better on Chinese text, so accept the fact that some words will be segmented wrongly.

Happy coding :)
*/
function maxMatch(sentence) {
  const arr = [];
  for (let i = 0; i <= sentence.length; i++) {
    for (let j = sentence.length; j >= 0; j--) {
      if (VALID_WORDS.has(sentence.slice(i, j))) {
        arr.push(sentence.slice(i, j));
        sentence = sentence.replace(sentence.slice(i, j), "*");
        i = -1;
        break;
      }
    }
  }
  let i = 0;
  return sentence.split``.map(v => (v === "*" ? arr[i++] : v));
}
