/*
Description:
Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Only capital chatacters can and will participate a battle.
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!"
*/

function battle(x, y) {
  let f = x.split("").reduce((a, b) => a + (b.charCodeAt() - 64), 0);
  let s = y.split("").reduce((a, b) => a + (b.charCodeAt() - 64), 0);
  return f > s ? x : s > f ? y : "Tie!";
}
