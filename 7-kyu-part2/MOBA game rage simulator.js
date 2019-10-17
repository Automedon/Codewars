/*
Description:
Create a function to simulate MOBA chat experience.

The function will accept an array of teammate names (teammates) and a boolean value(won) informing whether you won the game.

Function signature

var sayAfterGame = function(teammates, won)
{

}
If you lost, pick a random teammate name and express your frustration by forming a sentence with said teammates name and at least one of the following words:

- "fucking"
- "noob"
- "report"
- "retard"
- "uninstall"
- "feeder"
If you've won, simply return "ez game".
*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var sayAfterGame = function(teammates, won)
{
  const arr =["fucking","noob","report","retard","uninstall","feeder"]
  if (won) return 'ez game';
  return teammates[getRandomInt(0,4)]+' '+arr[getRandomInt(0,6)]
}
