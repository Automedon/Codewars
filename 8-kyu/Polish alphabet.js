/*
Description:
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

Example:

Input: "Jędrzej Błądziński"
Output: "Jedrzej Bladzinski"
*/

const polishDictionary = {
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z',
}
const correctPolishLetters = string =>
  string.replace(/[ąćęłńóśźż]/gi, char => polishDictionary[char] || char)
