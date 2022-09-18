/*
Description:
Cara is applying for several different jobs. The online application forms ask her to respond within a specific character count. Cara needs to check that her answers fit into the character limit.

Annoyingly, some application forms count spaces as a character, and some don't.
Your challenge:

Write Cara a function charCheck() with the arguments:

"text": a string containing Cara's answer for the question
"max": a number equal to the maximum number of characters allowed in the answer
"spaces": a boolean which is True if spaces are included in the character count and False if they are not
The function charCheck() should return an array: [True, "Answer"] , where "Answer" is equal to the original text, if Cara's answer is short enough.

If her answer "text" is too long, return an array: [False, "Answer"]. The second element should be the original "text" string truncated to the length of the limit.

When the "spaces" argument is False, you should remove the spaces from the "Answer".

For example:

charCheck("Cara Hertz", 10, True) should return [ True, "Cara Hertz" ]
charCheck("Cara Hertz", 9, False) should return [ True, "CaraHertz" ]
charCheck("Cara Hertz", 5, True) should return [ False, "Cara " ]
charCheck("Cara Hertz", 5, False) should return [ False, "CaraH" ]
*/
function charCheck(text, max, spaces) {
  if (!spaces) {
    text = text.replace(/\s+/g, "");
  }
  return [text.length <= max, text.slice(0, max)];
}
