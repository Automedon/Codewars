/*
Description:
Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.
*/
function stringParse(string){
  if (typeof string !== 'string') return "Please enter a valid string"
  let arr = []
  let str = ''
  for (let i=0;i<string.length;i++){
    if (string[i-1]===string[i]){
      str+=string[i]
    }else {
      arr.push(str)
      str=string[i]
    }
    if (i===string.length-1){arr.push(str)}
  }
  return arr.map(v=>v.length>2?v.slice(0,2)+'['+v.slice(2)+']':v).join``
}
