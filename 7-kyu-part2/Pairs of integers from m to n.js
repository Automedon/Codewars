/*
Description:
Write a function generatePairs that accepts two integer arguments m and n and generates an array containing the pairs of integers [a, b] that satisfy the following conditions:

m <= a <= b <= n
The pairs should be sorted by increasing values of a then increasing values of b.

For example, generatePairs(2, 4) should return

[ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]
*/
function generatePairs(m, n) {
  let arr = [];
  for (let i = m; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      arr.push([i, j]);
    }
  }
  return arr;
}
