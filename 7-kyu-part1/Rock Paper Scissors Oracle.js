/*
Description:
You are the rock paper scissors oracle.

Famed throughout the land, you have the incredible ability to predict which hand gestures your opponent will choose out of rock, paper and scissors.

Unfortunately you're no longer a youngster, and have trouble moving your hands between rounds. For this reason, you can only pick a single gesture for each opponent. If it's possible for you to win, you will, but you're also happy to tie.

Given an array of gestures — for example ["paper", "scissors", "scissors"] — return the winning gesture/s in the order in which they appear in the title, separated by a forward slash. For example, if rock and scissors could both be used to win you would return:

"rock/scissors"

If it's not possible for you to win then return:

"tie"

See https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors if you're not familiar with rock paper scissors.
*/

function oracle(gestures){
  let wins = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'}, 
      res = [], hands = ['rock', 'paper', 'scissors'], counts = []
  for (let h of hands) {
    let count = 0
    for (let g of gestures) {
      if (wins[h] === g) count++
      else if (h != g) count--
    }
    counts.push(count)
  }
  return counts.every(c => !c) ? 'tie' : counts.map((v, i) => v > 0 ? hands[i] : null).filter(v => v).join('/')
}
