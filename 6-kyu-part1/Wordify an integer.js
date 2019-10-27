/*
Description:
Turn a given number (an integer > 0, < 1000) into the equivalent English words. For the purposes of this kata, no hyphen is needed in numbers 21-99.

Examples:

wordify(1) == "one"
wordify(12) == "twelve"
wordify(17) == "seventeen"
wordify(56) == "fifty six"
wordify(90) == "ninety"
wordify(326) == "three hundred twenty six"
Based on "Speech module" mission from Checkio.
*/
const words = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90
};
function wordify(n) {
  const words1 = {};
  const mult1 = {};
  for (let i in words) {
    words1[words[i]] = i;
  }
  if (words1[n]) return words1[n];
  let arr = [];
  let s = n.toString().split``.reverse();
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i].padEnd(i + 1, 0));
  }
  if (words1[n.toString().slice(-2)])
    return (
      words1[s[s.length - 1]] + " hundred " + words1[n.toString().slice(-2)]
    );
  return arr
    .filter(v => parseInt(v))
    .map(v => (words1[v] ? words1[v] : words1[v[0]] + " hundred"))
    .reverse().join` `;
}
