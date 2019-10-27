/*
Description:
In this Kata, we are going to determine if the count of each of the characters in a string can be equal if we remove a single character from that string.

For example:

solve('abba') = false -- if we remove any character, the count of each character will not be equal.
solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
solve('wwwf') = true -- if we remove f, the remaining letters have same count.
More examples in the test cases. Empty string is not tested.

Good luck!
*/
function solve(s) {
  let dict = Object.values(
    s.split``.reduce((a, b) => ((a[b] = a[b] + 1 || 1), a), {})
  );
  if (dict.length === 1) return true;
  for (let i = 0; i < dict.length; i++) {
    let temp = dict[i];
    dict[i] = dict[i] - 1;
    if (dict.every(v => v == dict[i])) return true;
    dict[i] = temp;
  }
  dict = dict.sort((a, b) => a - b);
  if (dict.slice(1).every((v, i) => v === dict[1]) && dict[0] === 1)
    return true;
  return false;
}
