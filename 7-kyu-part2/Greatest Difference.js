/*
Description:
Your task is to find the number couple with the greatest difference from a given array of number-couples.

All number couples will be given as strings and all numbers in them will be positive integers.

For instance: ['56-23','1-100']; in this case, you should identify '1-100' as the number couple with the greatest difference and return it.

In case there are more than one option, for instance ['1-3','5-7','2-3'], you should identify whichever is first, so in this case '1-3'.

If there is no difference, like so ['11-11', '344-344'], return false.
*/
function diff(str){
  let arr=str.map(v=>Math.abs(eval(v)))
  if (arr.every(v=>v===0)) return false
  return str[arr.indexOf(Math.max(...arr))]
}
