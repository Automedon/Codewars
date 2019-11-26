/*
Description:
If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:

e.g. numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
e.g. numbersOfLetters(1) --> ["one", "three", "five", "four"]
*/
function numbersOfLetters(integer) {
  let d = {0:'zero',1:'one',2:'two',3:"three",4:'four',5:'five',6:"six",7:"seven",8:"eight",9:"nine"}
  let last = ''
  let arr = []
  for (let i=0;i<10;i++){
    integer=integer.toString().split``.map(v=>d[v]).join``
    arr.push(integer)
    let current = integer
    integer=integer.length
    if (last===current) return arr.slice(0,-1)
    last = current
  }
}
