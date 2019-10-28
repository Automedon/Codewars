/*
Description:
The President's phone is broken
He is not very happy.

The only letters still working are uppercase E, F, I, R, U, Y.

An angry tweet is sent to the department responsible for presidential phone maintenance.

Kata Task
Decipher the tweet by looking for words with known meanings.

FIRE = *"You are fired!"*
FURY = *"I am furious."*
If no known words are found, or unexpected letters are encountered, then it must be a *"Fake tweet."*

Notes
The tweet reads left-to-right.
Any letters not spelling words FIRE or FURY are just ignored
If multiple of the same words are found in a row then plural rules apply -
FIRE x 1 = *"You are fired!"*
FIRE x 2 = *"You and you are fired!"*
FIRE x 3 = *"You and you and you are fired!"*
etc...
FURY x 1 = *"I am furious."*
FURY x 2 = *"I am really furious."*
FURY x 3 = *"I am really really furious."*
etc...
Examples
ex1. FURYYYFIREYYFIRE = *"I am furious. You and you are fired!"*
ex2. FIREYYFURYYFURYYFURRYFIRE = *"You are fired! I am really furious. You are fired!"*
ex3. FYRYFIRUFIRUFURE = *"Fake tweet."*
DM :-)
*/
var fireAndFury = function(tweet) {
  if (!tweet.split``.every(v=>/[FIERUY]/.test(v))) return "Fake tweet."
  let c1 = 0
  let c2 = 0 
  let arr = []
  let ar = tweet.match(/FURY|FIRE/g)||0
  for (let i=0;i<ar.length;i++){
    if (ar[i]==='FURY'){
        c2=0
        c1++
        if (ar[i+1]!=='FURY'){
        arr.push(`I am${c1===1?' ':` really `.repeat(c1-1)}furious.`)
        } 
    }else{
        c1=0
        c2++
        if (ar[i+1]!=='FIRE'){
        arr.push(`You${c2===1?' ':` and you `.repeat(c2-1)}are fired!`)
        }
    }
  }
  if (arr.length) return arr.map(v=>v.replace(/\s+/g,' ')).join` `
  return "Fake tweet."
}
