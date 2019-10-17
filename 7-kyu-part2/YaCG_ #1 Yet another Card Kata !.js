/*
Description:
*" Under the frozen stars of himalayan nights, yak-boys and yak-girls are used to share chunks of chhurpi and hot cups of ja-srub-ma to the sound of sgra-snyan near a g.yag dung fire.*

After a while they also like to play card games. "

One of these games is called "YaCg" (yEt AnOtHeR cArD Game).

Rules
Yacg is a trick-taking game ie a game in which series of rounds, called "tricks", are played. At the end of a "trick" the winner of the trick "takes" it (and becomes the "trick-taker").

A standard 52-card pack is used. The cards in each suit rank from highest to lowest: A K Q J 10 9 8 7 6 5 4 3 2.

The trick is won by the highest card.

Task
Code a function winnerOfTrick( cards, players ) which return the name of the "trick-taker" ie the one who played the highest ranked card.

Input
cards is an array of card-codes of the form "RS" where :

"R" is the rank of the card ( one of A, K, Q, J, T (for 10), 9, 8, 7, 6, 5, 4, 3 or 2 )
"S" is the *suit * of the card (one of "H" (Hearts), "C" (Clubs), "D" (Diamonds) and "S" (Spades))
eg : [ "2H", "3H", "4C", "KD", "AS" ]

players is an array of yagc-fanatic yak-boys/girls.

eg : [ "Algichh", "Bdobd", "Charmolg", "Dbang", "Erming" ]

If players length is longer than cards length just ignore additional players.

Output
a string of the form "Bdobd wins" or "Tie! (Dbang,Erming)" if a tie occurs.
Examples:
winnerOfTrick( ["2D", "4D", "3S"],  ["GgbA", "mZoIs", "S'Lg"] ) // -> "mZoIs wins" ("4D" is the highest)
winnerOfTrick( ["4D", "2H", "4S"],  ["GgbA", "mZoIs", "S'Lg"] ) // -> "Tie! (GgbA,S'Lg)" ("4D" and "4S" are the highest)
winnerOfTrick( ["2D", "KH", "QH"],  ["mZoIs", "GgbA", "S'Lg"] ) // -> "GgbA wins" ("KH" is the highest)
 

"* gMay the gCode be with gYou ! *"
*/
function winnerOfTrick(cards, players) {
  const arr = {
    "2": 0,
    "3": 1,
    "4": 2,
    "5": 3,
    "6": 4,
    "7": 5,
    "8": 6,
    "9": 7,
    T: 8,
    J: 9,
    Q: 10,
    K: 11,
    A: 12
  };
  let a = [];
  for (let i = 0; i < cards.length; i++) {
    a.push(arr[cards[i][0]]);
  }
  let winner = players[a.findIndex(v => v === Math.max(...a))];
  let tie = a.indexOf(Math.max(...a)) !== a.lastIndexOf(Math.max(...a));
  let t = a.map(v => v === Math.max(...a));
  if (tie) return `Tie! (${players.filter((v, i) => t[i] === true).join`,`})`;
  return `${winner} wins`;
}
