/*
Description:
This Kata is intended as a small challenge for my students

All Star Code Challenge #29

Your friend Nhoj has dislexia, but can easily read messages if the words are written backwards.
Create a function called reverseSentence()/reverse_sentence() that accepts a string argument. The function returns a string of the same length with each word reversed, but still in their original order.

reverseSentence("Hello !Nhoj Want to have lunch?"); // => 'olleH johN! tnaW ot evah ?hcnul'
Note:
A "word" should be considered a string split by a space character, " " Letter capitalization should be maintained.
*/
function reverseSentence(str) {
  return str.split` `.map(v => v.split``.reverse().join``).join` `;
}
