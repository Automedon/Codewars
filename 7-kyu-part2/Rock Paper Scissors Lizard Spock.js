/*
Description:
Rock-Paper-Scissors Big Bang Style

According to Sheldon Cooper the following is true:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
(and as it always has) Rock crushes Scissors

Given two random values from the above game, return the Player result as: Player 1 Won!, Player 2 Won! or Draw!
Only valid lower case values will be given from these possible values:
rock, spock, paper, lizard, scissors
*/
function rpsls(pl1, pl2) {
  let win = "Draw!";
  let arr = [
    "scissors cuts paper",
    "paper covers rock",
    "rock crushes lizard",
    "lizard poisons spock",
    "spock smashes scissors",
    "scissors decapitates lizard",
    "lizard eats paper",
    "paper disproves spock",
    "spock vaporizes rock",
    "rock crushes scissors"
  ].map(v => v.split` `);
  arr.map(v =>
    v[0] === pl1 && v[2] === pl2
      ? (win = "Player 1")
      : v[0] === pl2 && v[2] === pl1
      ? (win = "Player 2")
      : v
  );
  return win !== "Draw!" ? `${win} Won!` : win;
}
