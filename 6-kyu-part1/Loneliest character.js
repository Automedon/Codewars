/*
Description:
Your task is to write a function loneliest(str) which accepts a string like this:

'a b  z   p c'
and should return array of character(s) that have the most spaces to their right and left.

Examples:

'a b  c' => ['b']
'a bcs           d k' => ['d']
'    a b  sc     p     t   k'  => ['p']
'a  b  c  de'  => ['b', 'c']
'     a  b  c de        '  => ['b']
'abc' => ['a', 'b', 'c']
Note:

String can have leading/trailing spaces, you should not count them;

Order of characters in array doesn't matter;

Good luck!
*/
function loneliest(str) {
  str = str.trim()
  let obj = {}
  for(let i =0;i<str.length;i++){
    if (str[i]!==' '){
      let count = 0
      for(let j=1;j<str.length;j++){
        if (str[i+j]===' '){
          count+=1
        } else {
          break
        }
      }
      for(let j=1;j<str.length;j++){
        if (str[i-j]===' '){
          count+=1
        } else {
          break
        }
      }
      obj[str[i]] = count
    }
  }
  const max = Math.max(...Object.values(obj))
  const letters = []
  for (let i in obj){
    if (obj[i] === max){
      letters.push(i)
    }
  }
  return letters
}
