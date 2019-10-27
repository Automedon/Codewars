/*
Description:
Let’s get to know our hero: Agent #134 - Mr. Slayer.

He was sent by his CSV agency to Ancient Rome in order to resolve some important national issues. However, something incredible has happened - the enemies have taken Julius Caesar as a prisoner!!!

Caesar, not a simple man as you know, managed to send cryptic message with coordinates of his location hoping that somebody would break the code. Here our agent of the secret service comes to the stage.

But he needs your help!

Mission:

You have to implement the function “Encode” of CaesarCrypto class that codes or decodes text based on Caesar’s algorithm.

the function receives 2 parameters: an original text of any length of type “string” and a number of type “int” that represents shifts;
only letters in both cases must be encrypted;
alphabet contains only letters in this range: a-zA-Z;
by encryption the letter can change the case;
shift could be either positive or negative (for left shift);
If the input text is empty, null or includes only whitespaces, return an empty string.
Time's ticking away. The life of Caesar is on the chopping block! Go for it!
*/
function CaesarCryptoEncode(text, shift) {
  if (!text) return "";
  shift = ((shift % 52) + 52) % 52;
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return text
    .trim()
    .replace(/[a-z]/gi, c => letters[(letters.indexOf(c) + shift) % 52]);
}
