/*
Description:
Create any card game!
Create a Card Game library of classes which could be used to create any number of basic card games. You'll need at least a Deck class and a Card class.
Deck functionality
A deck has a public attribute:

cards: array of remaining cards in the deck.

...and three public methods:

count(): count of remaining cards in the deck.

shuffle(): randomize the order of the remaining cards in the deck.

draw(n): remove the last n cards from the deck and return them in an array.

Upon initialization, a deck is filled with 52 cards (13 from each of 4 suits).

Card functionality
A card has these public attributes:

suit: a symbol representing the suit of the card.

rank: an integer from 1 to 13. ("ace" is 1, "king" is 13)

Javascript: face_card: is this card a face card? (> 10)

...and these methods:

Ruby: face_card?: is this card a face card? (> 10)

to_s (JS:toString()) : human-readable string representation of the card (e.g. "Ace of Spades", "10 of Clubs", "Queen of Hearts")

Cards must be Comparable to other cards. Compare the ranks of the cards only.

Since this is a low level layer to build card games above, all test input will be valid. All ranks will be between 1 and 13 and all suits will be one of

Ruby: :hearts, :diamonds, :spades, :clubs
Javascript: Card.HEARTS, Card.DIAMONDS, Card.CLUBS, Card.SPADES
*/
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

Card.SUITS = [
  (Card.CLUBS = "Clubs"),
  (Card.DIAMONDS = "Diamonds"),
  (Card.HEARTS = "Hearts"),
  (Card.SPADES = "Spades")
];

Card.prototype = {
  get face_card() {
    return this.rank > 10;
  },
  valueOf: function() {
    return this.rank;
  },
  toString: function() {
    var rank =
      { 1: "Ace", 11: "Jack", 12: "Queen", 13: "King" }[this.rank] || this.rank;
    return rank + " of " + this.suit;
  }
};

function Deck() {
  this.cards = [];

  for (var i = 0; i < Card.SUITS.length; i++) {
    for (var rank = 1; rank <= 13; rank++) {
      this.cards.push(new Card(Card.SUITS[i], rank));
    }
  }

  this.shuffle();
}

Deck.prototype = {
  count: function() {
    return this.cards.length;
  },
  draw: function(n) {
    return this.cards.splice(-n, n);
  },
  shuffle: function() {
    this.cards.sort(function() {
      return Math.random() - 0.5;
    });
  }
};
