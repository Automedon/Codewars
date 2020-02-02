/*
Description:
This Kata is intended as a small challenge for my students

All Star Code Challenge #23

There is a certain multiplayer game where players are assessed at the end of the game for merit. Players are ranked according to an internal scoring system that players don't see.

You've discovered the formula for the scoring system!

Create a function called scoring() that takes an array of Player objects and returns an array of player names, in order of descending score (highest score is index 0, 2nd highest is index 1, etc.).

Each player's score is calculated as follows:

Each normal kill is worth 100 points
Each assist is worth 50 points
Each point of damage done is worth .5 points
Each point of healing done is worth 1 point
The longest kill streak is worth 2^N, where N is the number of kills of the streak
Environmental kills are worth 500 points (These are counted separately from normal kills)
For each of the above statistic, a Player object contains a respective "key:value" pairing. All values except the 'name' are integers.

var player1 = {
  name: "JuanPablo",
  normKill: 5,
  assist: 12,
  damage: 3200,
  healing: 0,
  streak: 4,
  envKill: 1
}
var player2 = {
  name: "ProfX",
  normKill: 2,
  assist: 14,
  damage: 600,
  healing: 1500,
  streak: 0,
  envKill: 0
}
scoring([player1, player2]); 
//["JuanPable","ProfX"]
// Scores of 3216 and 2701, respectively.
Note:
Assume the input array will ALWAYS have a properly constructed Player object (no missing keys or values)
Names will not contain unusual characters nor repeat (names are unique)
Players with the same score should be sorted by the order they appear in the array
For simplicity, for a kill streak of 0 the kill streak calculation will yield 1 (or 20) points
*/
function scoring(array){
  let arr  = []
  for (let i=0;i<array.length;i++){
    let score = 0
    let name = ``
    for (let j in array[i]){
        if (j===`name`){
          name=array[i][j]
        }
        if (j===`normKill`){
          score+=array[i][j]*100
        }
        if (j===`assist`){
          score+=array[i][j]*50
        }
        if (j===`damage`){
          score+=array[i][j]*0.5
        }
        if (j===`healing`){
          score+=array[i][j]
        }
        if (j===`streak`){
          score+=Math.pow(2,array[i][`streak`])
        }
        if (j===`envKill`&&array[i][j]>0){
          score+=array[i][j]*500
        }
    }
    arr.push([name,score])
  }
  return arr.sort((a,b)=>b[1]-a[1]).map(v=>v[0])
}
