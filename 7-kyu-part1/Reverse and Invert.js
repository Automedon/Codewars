/*
Description:
Reverse and invert all integer values in a given list.

Python:

reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
Ignore all other types than integer.
*/
function reverseInvert(array){
  return array.filter(v=>v===parseInt(v)).map(v=>{
  if (v>=0) return (''+v).split('').reverse().join('')*-1
  return (''+v).split('').reverse().join('').replace(/-/g,'')*1
  })
}
