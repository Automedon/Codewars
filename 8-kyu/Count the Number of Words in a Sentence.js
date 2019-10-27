/*
Description:
Write a function that takes as an input a string of words, and returns the number of words in that string.

For example:

str = "Houston, we have a problem"  #  return 5

str = "  Toto, I've got a feeling we're not in Kansas anymore. "  #  return 10 
Notes:

Contractions (such as "I've", and "we're") count as one word, not two.

Whitespaces at the beginning and end of a string should be ignored.
*/
function wordCount(str) {
  return str.trim().split(` `).length 
}
