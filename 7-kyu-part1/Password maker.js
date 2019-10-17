/*
Description:
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter “O” can be replaced with the number “0”).

• instead of including “i” or “I” put the number “1” in the password;

• instead of including “o” or “O” put the number “0” in the password;

• instead of including “s” or “S” put the number “5” in the password.

Examples: makePassword "Give me liberty or give me death" -> "Gml0gmd" makePassword "Keep Calm and Carry On " -> "KCaC0"
*/

function makePassword(phrase) {
  return phrase
    .split(" ")
    .map(v => v.slice(0, 1))
    .join("")
    .replace(/(o)/gi, 0)
    .replace(/(s)/gi, 5)
    .replace(/(i)/gi, 1);
}
