/*
Description:
Who knows the nursery rhyme Ten Green Bottles?

Lyrics:

Ten green bottles hanging on the wall,
Ten green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be nine green bottles hanging on the wall.

Nine green bottles hanging on the wall,
Nine green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be eight green bottles hanging on the wall. 

Eight green bottles hanging on the wall...
Seven green bottles hanging on the wall...
...

One green bottle hanging on the wall,
One green bottle hanging on the wall,
If that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.
Task
Write some amazing code to reproduce the above lyrics starting from n green bottles!

parameter n is 1 to 10
newline terminates every line (including the last)
don't forget the blank lines between the verses
*/
function tenGreenBottles(n) {
  const
  wordify = {10: 'ten', 9: 'nine', 8: 'eight', 7: 'seven', 6: 'six', 5: 'five', 4: 'four', 3: 'three', 2: 'two', 1: 'one', 0: 'no'},
  s1 = () => `${wordify[n].replace(/^[a-z]/, x => x.toUpperCase())} green bottle${n !== 1 ? 's' : ''} hanging on the wall,`,
  s2 = () => `${n > 1 ? 'And if': 'If that'} one green bottle should accidentally fall,`,
  s3 = () => `There'll be ${wordify[n - 1]} green bottle${n - 1 !== 1 ? 's' : ''} hanging on the wall.`,
  result = [];
  while (n > 0) {
    result.push(s1(), s1(), s2(), s3(), '');
    n--;
  }
  return result.join('\n');
}
