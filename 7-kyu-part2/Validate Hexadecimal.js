/*
Description:
Create a function to validate if a string is a valid hexadecimal.

Two patterns is valid

6 chars (ff00ff)
3 chars (f0f).
*/
function isHex(str) {
  if (str.length===3||str.length===6){
  const regexp = /^[0-9a-fA-F]+$/;
        if (regexp.test(str)){return true}
        else {return false}
  }
  return false
};
