/*
Description:
Your task should you chose to accept...
Build a deck of playing cards by generating 52 strings representing cards. There are no jokers.
Each card string will have the format of:

"ace of hearts"
"ace of spades"
"ace of diamonds"
"ace of clubs"
And will consist of the following ranks:

ace two three four five
six seven eight nine ten
jack queen king
They do not need to be in order.

Additional constraints
1 line only!
buildDeck is a variable holding your deck. It is not a function.
*/
let buildDeck = `ace two three four five six seven eight nine ten jack queen king `
  .replace(
    /\w+\s?/g,
    v => `${v}of hearts|${v}of spades|${v}of diamonds|${v}of clubs|`
  )
  .slice(0, -1)
  .split(`|`);
