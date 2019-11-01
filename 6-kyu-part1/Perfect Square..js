/*
Description:
Task
Write function which validates an input string. If the string is a perfect square return true,false otherwise.

What is perfect square?
* We assume that character '.' (dot) is a perfect square (1x1) * Perfect squares can only contain '.' (dot) and optionally '\n' (line feed) characters.
* Perfect squares must have same width and height -> cpt.Obvious
* Squares of random sizes will be tested!
Function input:
perfectSquare = "...\n...\n...";    

// This represents the following Perfect Square:

`...
 ...
 ...`

notPerfect = "..,\n..\n...";

// This is not a Perfect Square:

`..,
 ..
 ...`
*/
function perfectSquare(string){
  if (string.length===1) return true
  let s = string.split`\n`
  if (s.every(v=>v.length===1)) return false
  let perfect = false
  let complex = false
  if (s.every(v=>v.length===s[0].length)) perfect = true
  if (!s.map(v=>v.split``.every(v=>v==='.')).every(v=>v===true)) complex =true
  if (s.length===1) complex = true
  if (perfect&&!complex) return true 
  return false
}
