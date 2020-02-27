/*
Description:
Inspired by another Kata - Heroes of Might & Magic II: Chain Lightning by Firefly2002, I thought I might have a go at another Kata related to this game.

In this Kata, two groups of monsters will attack each other, and your job is to find out who wins. Each group will have a stat for each of the following: number of units, hitpoints per unit, damage per unit, and monster type.

If you are not familiar with the game, just think of each group as standing in a line so that when they are attacked the unit at the front of the line takes the hit before the others, and if he dies the remaining damage will hit the next unit and so on. Therefore multiple units (or even the whole group) can die in one attack.

Each group takes turns attacking, and does so until only one remains. In this kata, the first entry in the input array is the first to attack.

The inputs for this game will be two dictionaries, each with the stats of each monster. Using these stats, calculate which group wins, and how many units in that group stay alive (unless they are undead :P), and return it as a string - formatted as below:

Input:
mon1 = {"type": "Roc",     "hitpoints": 40, "number": 6, "damage" : 8 };
mon2 = {"type": "Unicorn", "hitpoints": 40, "number": 4, "damage" : 13};

Output:
"[NUMBER] [TYPE](s) won"   // in this case "5 Roc(s) won"
The damage of each attack is calculated simply as (number of units) * (damage per unit).

You must also take into account that the first unit in the group may injured BUT he still attacks with full strength.

Fighting mechanics explanation:

mon1 = {"type": "Roc",     "hitpoints": 40, "number": 6, "damage":8 }
mon2 = {"type": "Unicorn", "hitpoints": 40, "number": 4, "damage":13}

1) The Rocs attack the Unicorns for 48 damage (6 * 8),
   killing one and damaging the next - leaving it with 32/40 hitpoints.
2) The remaining 3 Unicorns attack the Rocs for 39 damage (3 * 13),
   killing 0 but leaving the first one with only 1/40 hitpoints.
3) Repeat until one of the groups is left with 0 units in total.
*/
function whoWouldWin(mon1, mon2) {
  let d1 = mon1['damage']
  let d2 = mon2['damage']
  let n1 = mon1['number']
  let n2 = mon2['number']
  let h1 = mon1['hitpoints']
  let h2 = mon2['hitpoints']
  let a1 = h1*n1
  let a2 = h2*n2
  while (a2>0&&a1>0){
    a2-=n1*d1
    if (a2<=0) return `${n1} ${mon1['type']}(s) won`
    n2= Math.ceil(a2/h2)
    a1-=n2*d2
    n1= Math.ceil(a1/h1)
  }
  return `${n2} ${mon2['type']}(s) won`
}
