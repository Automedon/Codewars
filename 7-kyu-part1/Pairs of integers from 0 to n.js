/*
Write a function generatePairs that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the following conditions:

0 <= a <= b <= n
The pairs should be sorted by increasing values of a then increasing values of b.

For example, generatePairs(2) should return

[ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
*/
function generatePairs(n) {
  const arr= [];
  for (let i=0;i<=n;i++){
    for (let j=0;j<=n;j++){
      j>=i?arr.push([i,j]):null
    }
  }
  return arr
}
