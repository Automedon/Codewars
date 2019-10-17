/*
Description:
This kata is based on an NPR Sunday puzzle I solved with a little program. I thought it would be fun to build a kata around it. Here's the puzzle:

Think of an article of apparel in eight letters.

Drop the last 2 letters.

Move what are the now the last 2 letters to the front.

You'll get an article of apparel in 6 letters. What is it?

The answer to the puzzle was Monokini => Kimono

Monokini <----- Originial Word
Monokini <----- Drop the last two letters
Kimono <----- Move the new last two letters to the front

You will be supplied two arrays - one filled with 6 letter words, and one filled with 8 letter words. Inside of the 6 letter word array is ONE eight letter word that went through the shift above. Find it and output both the OLD WORD and NEW WORD in an array.

 var sixLetterWords = ["Blabla", "Ladeeda", "Kimono"];
 var eightLetterWords = ["Randommm", "Monokini", "Examples"];

 findShiftedWord(sixLetterWords, eightLetterWords) => ["Monokini", "Kimono"]
If there is no solution you should output an empty array.

 var sixLetterWords = ["Blabla", "Ladeeda", "Kimono"];
 var eightLetterWords = ["Randommm", "Noanswer", "Examples"];

 findShiftedWord(sixLetterWords, eightLetterWords) => []
Pay attention to capitalization in your result. The tests will have only zero or one matching word.
*/
function findShiftedWord(sixLetterWords, eightLetterWords){
  let arr1 = []
  let arr = eightLetterWords.filter(v=>{
  v=v.slice(0,-2);
  v=v.slice(-2)+v.slice(0,-2);
  v=v.slice(0,1).toUpperCase()+v.slice(1).toLowerCase();
  let word = v.slice()
  return sixLetterWords.includes(v)&&arr1.push(word)
  })
 return [...arr,...arr1]
}
