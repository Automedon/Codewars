/*
Description:
In the board game Talisman, when two players enter combat the outcome is decided by a combat score, equal to the players power plus any modifiers plus the roll of a standard 1-6 dice. The player with the highest combat score wins and the opposing player loses a life. In the case of a tie combat ends with neither player losing a life.

For example:

Player 1: 5 Power, 0 Modifier
Player 2: 3 Power, 2 Modifier

Player 1 rolls a ', Player 2 rolls a 2.

(5 + 0 + 4) -> (3 + 2 + 2)
Player 1 wins (9 > 7)
Your task is to write a method that calculates the required roll for the player to win.

The player and enemy stats are given as an array in the format:

[power, modifier]
For example for the examples used above the stats would be given as:

getRequired([5, 0], [3, 2]) // returns 'Random'
If the player has at least 6 more power (including modifiers) than the enemy they automatically wins the fight, as the enemy's combat score couldn't possibly exceed the player's. In this instance the method should return "Auto-win".

For example:

getRequired([9, 0], [2, 1]) // returns 'Auto-win' as the enemy can't possibly win
If the enemy has at least 6 more power (including modifiers) than the player they automatically wins the fight, as the player's combat score couldn't possibly exceed the enemy's. In this instance the method should return "Auto-lose".

For example:

getRequired([2, 1], [9, 0]) // returns 'Auto-lose' as the player can't possibly win
If the player and enemy have the same power (including modifiers) the outcome is purely down to the dice roll, and hence would be considered completely random. In this instance the method should return "Random".

For example (as above):

getRequired([5, 0], [3, 2]) // returns 'Random' as it is purely down to the dice roll
If the player has greater power than the enemy (including modifiers) the player could guarantee a win by rolling a high enough number on the dice. In this instance the method should return a range equal to the numbers which would guarantee victory for the player.

getRequired([6, 0], [2, 2]) // returns '(5..6)' as rolling a 5 or 6 would mean the enemy could not win
getRequired([7, 1], [2, 2]) // returns '(3..6)' as rolling anything 3 through 6 would mean the enemy could not win
If the player has less power than the enemy (including modifiers) the player can only win if the enemy rolls a low enough number, providing they then roll a high enough number. In this instance the method should return a range equal to the numbers which would allow the player a chance to win.

getRequired([4, 0], [6, 0]) // returns '(1..3)' as this would be the only outcome for which the player could still win
getRequired([1, 1], [6, 0]) // returns '(1..1)' as this would be the only outcome for which the player could still win
If the better case scenario for the player is to hope for a tie, then return "Pray for a tie!".

getRequired([7, 2], [6, 8]) // returns "Pray for a tie!"
*/
function getRequired(player, enemy) {
  const p = player[0] + player[1]
  const e = enemy[0] + enemy[1]
  
  if (p == e) return 'Random'
  if (p >= e + 6) return 'Auto-win'
  if (p + 6 <= e) return 'Auto-lose'
  if (p > e) return `(${e + 7 - p}..6)`
  if (p + 5 > e) return `(1..${p + 5 - e})`
  return 'Pray for a tie!'
}
