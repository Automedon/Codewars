/*
Description:
Task
You're given an arbitrary 32-bit integer n. Swap each pair of adjacent bits in its binary representation and return the result as a decimal number.

Example
For n = 13, the output should be 14

1310 = 11012 ~> 11102 = 1410

For n = 74, the output should be 133

7410 = 010010102 ~> 100001012 = 13310

Note

the preceding zero written in front of the initial number: since both numbers are 32-bit integers, they have 32 bits in their binary representation. The preceding zeros in other cases don't matter, so they are omitted. Here, however, it does make a difference.

Input/Output
[input] integer n

0 ≤ n < 2^30.

[output] an integer
*/
function swapAdjacentBits(n) {
  let s = n.toString(2);
  if (s.length % 2 !== 0) s = "0" + s;
  let arr = [];
  for (let i = 0; i < s.length; i += 2) {
    arr.push(s.slice(i, i + 2));
  }
  return parseInt(
    arr
      .map(v => v.replace(/(01|10)/, x => (x === "01" ? "10" : "01")))
      .join(""),
    2
  );
}
