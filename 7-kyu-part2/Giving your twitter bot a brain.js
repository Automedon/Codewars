/*
Description:
Now that you've hooked up your twitter bot to the Twitter API, you need to give your bot a 'brain' by telling it what to say.

Bad news though: Twitter doesn't like bots on their platform, and their rules recently got even more restrictive.

The Rules
tweets cannot be more than 180 characters
you cannot tweet identical text
tweets must be longer than 1 character
The task
create a function, newTweet, that returns a new, unique string every time it's called. This tweet must always be within the length limitations

hints
This is a fundamentals puzzle rather than a computer science puzzle, so assume that 'never repeats' really means 'very unlikely to repeat the first million times it's called' and not 'will never repeat before the heat death of the universe'
*/
function newTweet() {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(Math.random());
  }
  return arr.join``;
}
