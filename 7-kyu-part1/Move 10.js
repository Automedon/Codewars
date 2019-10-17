/*
Description:
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/
function moveTen(s){
   const str='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
   const arr=s.split('').map(v=>v=str.indexOf(v)+10)
   return arr.map(v=>v=str[v]).join('')
}
