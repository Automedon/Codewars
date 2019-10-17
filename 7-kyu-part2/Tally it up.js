/*
Description:
I'm creating a scoreboard on my game website, but I want the score to be displayed as tally marks instead of Roman numerals. Write a function that translates the numeric score into tally marks.

My tally mark font uses the letters a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5, respectively. I want a space and line break (<br>) after each completed tally (5).

Assume that the score you receive will be an integer. This function should return an HTML string that I can insert into my website that represents the correct score.
*/
var scoreToTally = function(score){
  let arr =[];
  while (score>=5){
    arr.push('e <br>')
    score-=5
  }
  while (score>=4){
    arr.push('d')
    score-=4
  }
  while (score>=3){
    arr.push('c')
    score-=3
  }
  while (score>=2){
    arr.push('b')
    score-=2
  }
  while (score>=1){
    arr.push('a')
    score-=1
  }
  return arr.join(``)
}
