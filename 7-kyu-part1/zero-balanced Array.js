/*
Description:
An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.
*/
function ìsZeroBalanced(n) {
  if (n.length === 0) return false;
  const pos = [];
  let neg = [];
  const zero = [];
  n.map(v => (v > 0 ? pos.push(v) : v === 0 ? zero.push(v) : neg.push(v)));
  neg = neg.sort((a, b) => Math.abs(a) - Math.abs(b));
  if (
    !pos.sort((a, b) => a - b).every((v, i) => Math.abs(neg[i]) === Math.abs(v))
  )
    return false;
  if (zero.length > 0 && pos.length === neg.length) return true;
  if (pos.length !== neg.length) return false;
  return n.reduce((a, b) => a + b, 0) === 0;
}
