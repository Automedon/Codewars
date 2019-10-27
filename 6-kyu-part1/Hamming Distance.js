/*
Description:
The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

Examples (in JavaScript):

hamming("I like turtles","I like turkeys")  //returns 3
hamming("Hello World","Hello World")  //returns 0
You can assume that the two input strings are of equal length.
*/
function hamming(a, b) {
  let n = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      n++;
    }
  }
  return n;
}
