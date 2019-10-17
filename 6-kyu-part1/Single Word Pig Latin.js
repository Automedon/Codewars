/*
Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.

The rules themselves are rather easy:

1) The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

2) The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus "ay".

3) The result must be lowercase, regardless of the case of the input. If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).

4) The function must also handle simple random strings and not just English words.

5) The input string has no vowels -> return the original string plus "ay".

For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants, so they are moved to the end of the string and "ay" is appended.


*/
function pigLatin(string){
  string=string.toLowerCase()
  if (/[0-9]/.test(string)) return null
  if (/[auioe]/.test(string[0])) return string+'way'
  for (let i=0;i<string.length;i++)
  {
  if (/[auioe]/.test(string[0])) return (string+'ay')
  let temp = string[0];
  string=string.substring(1)+temp
  }
  return (string+'ay')
}
