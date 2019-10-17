/*
Description:
Write a function that removes all the even characters from a string and returns them in an array. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

function evenChars("abcdefghijklm") {}
// should return ["b", "d", "f", "h", "j", "l"]

function evenChars("a")
// should return "invalid string"
*/
function evenChars(string) {
  if (string.length<2||string.length>99) return "invalid string"
  return [...string].map((v,i)=>i%2!==0?v:null).filter(v=>v!==null)
}
