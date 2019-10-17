/*
Description:
You will be given a string of letters. The string must be returned in alphabetical order.
*/
function alphabetti(str) {
  return str.split``.sort((a,b)=>a.toLowerCase()>b.toLowerCase()).join``
}
