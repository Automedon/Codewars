/*
Description:
Sentence Calculator
Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
Other characters: 0 value
Note: input will always be a string
*/
 function lettersToNumbers(s) {
  let score = 0
  s.split``.map(v=>{
    if (/[a-z]/.test(v)) score+=v.charCodeAt()-96
    if (/[A-Z]/.test(v)) score+=(v.charCodeAt()-64)*2
    if (/[0-9]/.test(v)) score+=v*1
  })
  return score
 }
