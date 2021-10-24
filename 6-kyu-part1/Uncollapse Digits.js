/*
Description:
Task
You will be given a string of English digits "stuck" together, like this:

"zeronineoneoneeighttwoseventhreesixfourtwofive"

Your task is to split the string into separate digits:

"zero nine one one eight two seven three six four two five"

Examples
"three"              -->  "three"
"eightsix"           -->  "eight six"
"fivefourseven"      -->  "five four seven"
"ninethreesixthree"  -->  "nine three six three"
"fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"
*/

function uncollapse(digits){
  let str = '';
  for (let i=0;i<digits.length;i++){
    for (let j=i+1;j<=digits.length;j++){
      const word = digits.slice(i,j)
      if(digit.includes(word)){
        str += ' ' + word
        i=j
      }
    }
  }
  return str.trim()
}

const digit = "zero nine one one eight two seven three six four two five".split(' ')
