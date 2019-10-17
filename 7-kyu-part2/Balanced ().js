/*
Description:
Given a string, return true if it contains balanced parenthesis ().

this means only that the number of "(" equals the number of ")"
the strings can contain other characters
Ex :

"()()()" => true

")(" => true

"(()" => false
*/
function isBalanced (string) {
    string=string.replace(/[^\(\)]/g,'')
  while (/\(\)/.test(string)){
    string=string.replace(/\(\)/,'')
  }
  return !string
}
