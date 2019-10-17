/*
Description:
Create a function to replace all vowels (aeiou) of string for ?, example:

replaceVogals('lorem ipsum') => 'l?r?m ?ps?m'
*/
function replaceVogals(str) {
  return str.replace(/[aeiou]/gi,'?')
}
