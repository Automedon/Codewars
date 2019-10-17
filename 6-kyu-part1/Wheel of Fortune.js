/*
Description:
Three candidates take part in a TV show.

In order to decide who will take part in the final game and probably become rich, they have to roll the Wheel of Fortune!

The Wheel of Fortune is divided into 20 sections, each with a number from 5 to 100 (only mulitples of 5).

Each candidate can roll the wheel once or twice and sum up the score of each roll. The winner one that is closest to 100 (while still being lower or equal to 100). In case of a tie, the candidate that rolled the wheel first wins.

You receive the information about each candidate as an array of objects: each object should have a name and a scores array with the candidate roll values.

Your solution should return the name of the winner or false if there is no winner (all scored more than 100).

Example:

var c1 = { name: "Bob", scores: [10, 65] };
var c2 = { name: "Bill", scores: [90, 5] };
var c3 = { name: "Charlie", scores: [40, 55] };
winner([c1, c2, c3]); // Returns "Bill"
Please note that inputs may be invalid: in this case, the function should return false.

Potential errors derived from the specifications are:

More or less than three candidates take part in the game.
A candidate did not roll the wheel or rolled it more than twice.
Scores are not valid.
Invalid user entry (no name or no score).
*/
function winner(c) {
  if (c.length !== 3) return false;
  if (c.some(v => !v.scores || !v.name)) return false;
  if (c.some(v => !v.scores.every(v => v % 5 == 0))) return false;
  if (c.some(v => v.scores.length > 2 || !v.scores.length)) return false;
  if (c.some(v => v.scores.reduce((a, b) => a + b, 0) > 100)) return false;
  return c
    .map(v => [v.name, v.scores.reduce((a, b) => a + b, 0)])
    .sort((a, b) => b[1] - a[1])[0][0];
}
