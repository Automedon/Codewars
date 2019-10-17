/*
Description:
Task
You have some people who are betting money, and they all start with the same amount of money (this number>0).

Find out if the given end-state of amounts is possible after the betting is over and money is redistributed.

Input/Output
[input] integer array arr

the proposed end-state showing final amounts for each player

[output] a boolean value

true if this is a possible end-state and false otherwise

Examples
For arr = [0, 56, 100], the output should be true.
Three players start with the same amount of money 52.

At the end of game, player 1 lose 52, player2 win 4, and player3 win 48.

For arr = [0, 0, 0], the output should be false.
Players should start with a positive number of of money.

For arr = [11], the output should be true.
One player always keep his money at the end of game.

For arr = [100, 100, 100, 90, 1, 0, 0], the output should be false.
These players can not start with the same amount of money.
*/
function learnCharitableGame(arr) {
  return !!arr[arr.length-1]&&(arr.reduce((a,b)=>a+b,0)/arr.length)%1===0
}
