/*
Description:
Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/

function strToHash(str){
  if(!str) return {}
  const obj = {}
  str = str.replace(/,/g,'').split(` `).map(v=>{
    const splitted = v.split('=')
    obj[splitted[0]] = splitted[1]*1
  })
  
  
  return obj
}
