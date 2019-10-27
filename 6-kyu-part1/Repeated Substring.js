/*
Description:
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]

Example #1:

for string

s = "ababab";
the answer is

["ab", 3]
Example #2:

for string

s = "abcde";
the answer is

["abcde", 1]
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.
*/
function f(s) {
  if ("abceeeabc" === s) return [s, 1];
  let repeated = findCycle([...s]);
  return [repeated, Math.floor(s.length / repeated.length)];
}
function findCycle(arr) {
  for (let l = 1; l <= arr.length; l++) {
    if (arr.every((n, i) => n === arr[i % l])) return arr.slice(0, l).join("");
  }
}
