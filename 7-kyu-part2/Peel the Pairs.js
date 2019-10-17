/*
Description:
Given a string of numbers and a number n, peel away the pairs of digits that add up to n (starting from index 0). The numbers in the pair don't have to be adjacent to each other, but they should be paired with the closest digit to the right of them that sums to n.

Return the new string with those pairs removed.

peelPairs('14642', 3) => '464'
peelPairs('732374', 6) => '77' 
peelPairs('245638363', 10) => '53363'
*/
function peelPairs(str, n) {
  const p = str.split('').map(i => +i);
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {
      if (p[i] + p[j] === n) {
        return peelPairs(str.replace(p[i], '').replace(p[j], ''), n);
      }
    }
  }
  return str;
}
