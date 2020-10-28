/*
Description:
Task
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

'Hello world' = true
' Hello world' = false
'Hello world  ' = false
'Hello  world' = false
'Hello' = true
// Even though there are no spaces, it is still valid because none are needed
'Helloworld' = true 
// true because we are not checking for the validity of words.
' ' = false
'' = true
Note - there will be no punctuation or digits in the input string, only letters.
*/
function validSpacing(s) {
  if(s==='') return true
  s = s.split` `
  let spacing = 0
  for (let i =0; i<s.length;i++){
    if (s[i]==='') spacing +=1
  }
  return spacing === 0 
}
