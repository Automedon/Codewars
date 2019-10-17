/*
You will be given two inputs: a string of words and a letter.For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"
Return an empty string if there are no instances of letter in the given string.

Adapted from: Ruby Kickstart
*/
function comes_after(str, l) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === l.toLowerCase() || str[i] === l.toUpperCase()) {
      if (str[i + 1] !== undefined) {
        ans += str[i + 1];
      }
    }
  }
  return ans.replace(/[^a-z]/gi, "");
}
