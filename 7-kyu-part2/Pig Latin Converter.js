/*
Description:
Pig Latin Converter
Write a function that takes in a string and convert that string to Pig Latin.

Definition of Pig Latin for the purposes of this program:
Take the first letter of each word and put it at the end
Add 'ay' at the end of each word
Example
The cat ran away with the spoon

would evaluate to

hetay atcay anray wayaay ithway hetay poonsay

Misc Info
The returned value should be in all lowercase.
*/
function pigLatin(phrase){
  return phrase.toLowerCase().split(' ').map(v=>v.slice(1)+v.slice(0,1)+'ay').join(` `)
}
