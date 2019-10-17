/*
Description:
Trumps or Top Trumps is a card game, in which each card contains a list of numerical data, and the aim of the game is to compare these values to try to trump and win an opponent's card. A wide variety of different packs of Top Trumps have been published over the years.

Given the following card class:

function Card(stats) {
  this.stats = stats;
}
In which 'stats' is an array of integers, your method "checkWinner" must calculate whether the player or the opponent wins for a given index of the stats array (the highest value wins) and return either "player", "opponent" or "tie". If the stat index is out of bounds of the stats array for the player or opponent card return "invalid".

For example:

var playerCard = new Card([181, 78, 76, 5, 1987]);
var opponentCard = new Card([185, 98, 85, 12, 1985]);

//Returns 'opponent'
var winner = checkWinner(playerCard, opponentCard, 0);
*/
function checkWinner(playerCard, opponentCard, statIdx) {
  if (!playerCard.stats[statIdx]||!opponentCard.stats[statIdx]) return "invalid"
  return playerCard.stats[statIdx]>opponentCard.stats[statIdx]?'player':
  playerCard.stats[statIdx]<opponentCard.stats[statIdx]?"opponent":'tie'
}
