/*
Description:
A family of kookaburras are in my backyard.

I can't see them all, but I can hear them!

How many kookaburras are there?

Hint
The trick to counting kookaburras is to listen carefully

The males go HaHaHa...

The females go hahaha...

And they always alternate male/female

^ Kata Note : No validation is necessary; only valid input will be passed :-)
*/
var kookaCounter = function(laughing) {
  if (laughing.length === 0) return 0;
  laughing = laughing.replace(/a/gi, "");
  let count = 1;
  for (let i = 0; i < laughing.length - 1; i++) {
    if (laughing[i] !== laughing[i + 1]) {
      count++;
    }
  }
  return count;
};
