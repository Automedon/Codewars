/*
Description:
Consider a game, wherein the player has to guess a target word. All the player knows is the length of the target word.

To help them in their goal, the game will accept guesses, and return the number of letters that are in the correct position.

Write a method that, given the correct word and the player's guess, returns this number.

For example, here's a possible thought process for someone trying to guess the word "dog":

countCorrectCharacters("dog", "car"); //0 (No letters are in the correct position)
countCorrectCharacters("dog", "god"); //1 ("o")
countCorrectCharacters("dog", "cog"); //2 ("o" and "g")
countCorrectCharacters("dog", "cod"); //1 ("o")
countCorrectCharacters("dog", "bog"); //2 ("o" and "g")
countCorrectCharacters("dog", "dog"); //3 (Correct!)
The caller should ensure that the guessed word is always the same length as the correct word, but since it could cause problems if this were not the case, you need to check for this eventuality:

//Throw an error if the two parameters are of different lengths.
You may assume, however, that the two parameters will always be in the same case.
*/
function countCorrectCharacters(correctWord, guess){
  if(correctWord.length!==guess.length)throw new Error();
  return correctWord.split('').filter((v,i)=>v===guess[i]).length
}
