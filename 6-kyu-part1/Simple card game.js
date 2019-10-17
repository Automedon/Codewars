/*
Steve and Josh are bored and want to play something. They don't want to think too much, so they come up with a really simple game. Write a function called winner and figure out who is going to win.

They are dealt the same number of cards. They both flip the card on the top of their deck. Whoever has a card with higher value wins the round and gets one point (if the cards are of the same value, neither of them gets a point). After this, the two cards are discarded and they flip another card from the top of their deck. They do this until they have no cards left.

deckSteve and deckJosh are arrays representing their decks. They are filled with cards, represented by a single character. The card rank is as follows (from lowest to highest):

'2','3','4','5','6','7','8','9','T','J','Q','K','A'
Every card may appear in the deck more than once. Figure out who is going to win and return who wins and with what score:

"Steve wins x to y"
if Steve wins, where x is Steve's score, y is Josh's score;

"Josh wins x to y"
if Josh wins, where x is Josh's score, y is Steve's score;

"Tie"
if the score is tied at the end of the game.


### Example: Steve is dealt: ```javascript ['A','7','8'] ```
Josh is dealt:

['K','5','9']
In first round, ace beats king and Steve gets one point.
In second round, 7 beats 5 and Steve gets his second point.
In third round, 9 beats 8 and Josh gets one point.

You should return: ```javascript "Steve wins 2 to 1" ```
*/
function winner(deckSteve, deckJosh) {
  let cards={'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'T':10,'J':11,'Q':12,'K':13,'A':14}
  let s=0;
  let j=0;
  deckSteve=deckSteve.map(v=>cards[v])
  deckJosh=deckJosh.map(v=>cards[v])
  deckSteve.map((v,i)=>v>deckJosh[i]?s++:v<deckJosh[i]?j++:null)
  if (s===j) return 'Tie'
  return s>j?`Steve wins ${s} to ${j}`:`Josh wins ${j} to ${s}`
}
