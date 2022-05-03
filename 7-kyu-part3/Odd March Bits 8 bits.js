/*
Odd bits are getting ready for Bits Battles.

Therefore the n bits march from right to left along an 8 bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

Return an array of all the steps.

1 <= n <= 8

NOTE: n != 0, because n represents the number of 1s.

Examples
This resembles a simple 8 LED chaser:

n = 3

00000111
00001110
00011100
00111000
01110000
11100000
n = 7

01111111
11111110
*/

function bitMarch(n) {
  let march = [];
  for (let i = 0; i < 9 - n; i++) {
    march.push([]);
    for (let j = 0; j < 8; j++) {
      march[i].push([]);
    }
  }
  for (let i = 0; i < march.length; i++) {
    for (let j = 0; j < march[i].length; j++) {
      march[i][j] =
        j >= march[i].length - n - i && j <= march[i].length - 1 - i ? 1 : 0;
    }
  }
  return march;
}
