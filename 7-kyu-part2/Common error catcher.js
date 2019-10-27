/*
Description:
An English teacher is writing an online spelling checker and she knows of some common spelling mistakes where students will give an incorrect number of consecutive letters ("possible" is regularly misspelled "posible").

She wants a function that she can pass the word that needs to be checked ("posible"), as well as the letter that is commonly given an incorrect number of times ("s"), and the exact number of times that that letter should appear (2). This final argument is optional - if given it can range from 1 to 3 or if no argument is given, then it should be assumed that exactly 1 of the given letter is desired.

function checkLetters(word,letter,correctNumber) {...}
If the word has exactly the correct number of consecutive letters being tested, the function should return true.

-> checkLetters("hello","e") => true

-> checkLetters("kata","t",1) => true 

-> checkLetters("hello","l",2) => true

-> checkLetters("goddessship","s",3) => true
If the word doesn't contain only the exact substring of letters that is desired, the function should return false.

checkLetters("necesary","s",2) => false

checkLetters("disapointed","p",2) => false

checkLetters("accommmodate","m",2) => false

checkLetters("athyist","e",1) => false
##Notes:

All characters in the given word and letter will be lowercase letters.

If the correctNumber parameter is given, it can be 1, 2 or 3, if it is not given then it assumed that exactly 1 of the letter is supposed to appear.

A word to be checked will only have 1 substring of the given letter. The following word/letter pairs will not be tested:

"undefined" , "d" (since there are 2 seperate substrings containing "d")

"letter" , "e" (since there are 2 seperate substrings containing "e")

"people" , "p" (since there are 2 seperate substrings containing "p")

The following word/letter pairs could be tested:

"undefined" , "f"

"letter" , "t"

"people" , "l"

"gobbledegooooppp", "p"
*/
function checkLetters(word, letter, correctNumber) {
  let count = 1;
  for (let i = 0; i < word.length - 1; i++) {
    word[i] === letter && word[i + 1] === letter ? count++ : 1;
  }
  !word.match(letter) ? count-- : 1;
  correctNumber === undefined ? (correctNumber = count) : 1;
  return count === correctNumber;
}
