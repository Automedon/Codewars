/*
Description:
As a parent, nappy changing is a never ending part of your daily routine. How the mighty have fallen!

A friend: "Fancy popping to the pub like the old days?" You: "Nah, I'll stay in and wipe poo off a baby thanks, I've moved on."

It's important to establish that a small is indeed coming from the baby before you begin the process of changing, because time is now percious and you don't want any false alarms.

The trouble is that your partner is also smelly...

You will be given a 2-dimensional array (p) that looks similar to below. Empty spots are represented by 'o' and your baby's bottom is represented by 'B'. Any scent is represented by '~'.

Example 1: Baby smell

[
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
[ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'B', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
]
Example 1: Partner smell

[
[ 'B', '~', '~', '~', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
[ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
If the smell is rising vertically, it's safe to say it's coming from the baby - return "Get the wipes!". If the smell is moving horizontally.. it's probably your partner trying to pass it off as the baby - return "You disgust me!". in both cases the three scents must be connected to the baby.

If there is no scent, or there are less than three in a row, there is no baby, or they do not form a straight vertical of horizontal line, return "Calm before the storm".

Lines of scent cannot pass through the baby (or if they do they dont count).
*/
function pooRoulette(p) {
  for (let i = 0; i < p.length; i++) {
    if (p[i].includes("B")) {
      if (
        p[i][p[i].indexOf("B") + 1] === "~" &&
        p[i][p[i].indexOf("B") + 2] === "~" &&
        p[i][p[i].indexOf("B") + 3] === "~"
      ) {
        return "You disgust me!";
      }
      if (
        p[i][p[i].indexOf("B") - 1] === "~" &&
        p[i][p[i].indexOf("B") - 2] === "~" &&
        p[i][p[i].indexOf("B") - 3] === "~"
      ) {
        return "You disgust me!";
      }
      if (p[i - 1] && p[i - 2] && p[i - 3]) {
        if (
          p[i - 1][p[i].indexOf("B")] === "~" &&
          p[i - 2][p[i].indexOf("B")] === "~" &&
          p[i - 3][p[i].indexOf("B")] === "~"
        ) {
          return "Get the wipes!";
        }
      }
    }
  }
  return "Calm before the storm";
}
