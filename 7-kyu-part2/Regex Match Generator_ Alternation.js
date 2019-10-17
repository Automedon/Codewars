/*
Description:
Complete the function regex_matches().

The function should accept one parameter, regex, which will be a valid Regular Expression. This is a pattern which is normally used to match parts of a string. Today we'll be flipping that on its head.

regex.source will contain a string of characters. The regex matches any part of a given string that "matches" the pattern described there.

For example, the regex pattern "abc" would match a part of a string (called a "substring") that is also "abc".

You can also do more interesting things. In this kata, we'll focus on "Alternation." Using the "pipe" character (|) the regex can behave differently, depending on the situation.

The regex pattern "abc|123" would match a substring of "abc" or (alternatively) "123". Note that if it finds "abc", it will match "abc", even if later on in the same string there's a "123". (This behaviour can be changed by "flags", but you won't need to worry about those for now.)

There can be as many "ors" as is needed. You could even match an empty string!

For this kata, you will take the given regex, look at its source, and figure out what substrings it would match. Then you'll return an array with each of those strings.

So, following on from above, if I give you the regex "abc|123", then you'll return the array ["abc", "123"].

The only characters you'll need to match are lowercase alphetical characters (abcdefghijklmnopqrstuvwxyz) or numbers (0123456789).

TL;DR
Complete the function regex_matches(). The only feature used will be Alternation using the "pipe" (|) character. The only characters to match will be lowercase alphabetical and numerical characters. Generate valid matches for a given regex, as passed into the function, and return them as strings in an array.
*/
function regex_matches(regex) {
  regex=regex.toString().replace(/[/\\]/g,'')
  if (/\|/.test(regex)){
    return regex.split('|')
  }
  return [regex]
}
