/*
Description:
Split a camelcase string into individual words, the return value must be a single string of words seporated by one whitespace.

The strings are to be split on the capital letters like so:

'StringStringString' => 'String String String'
*/
function splitter(str){
  return str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}
