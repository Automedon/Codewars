/*
Description:
Welcome to this Kata. In this Kata you will be given a string. Your task is to replace every character with the letter following it in the alphabet (for example, "b" should be "c", "z" should be "a" and capital "Z" should be "A").

The test cases would not have any special symbols or numbers but it will have spaces. And the upper and lower cases should be retained in your output.

For Example:

letterChange('Lorem Ipsum')    // return Mpsfn Jqtvn
*/
function letterChange(str) {
  let l = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
  let u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
return str.split('').map(v=>{
  if (l.indexOf(v)>-1) return v=l[l.indexOf(v)+1]
  if (u.indexOf(v)>-1) return v=u[u.indexOf(v)+1]
  else return v
}).join``
}
