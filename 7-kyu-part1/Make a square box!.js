/*
Description:
Easy; Make a box
Given a number as a parameter, return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]
*/
function box(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i > 1 && i < n) {
      arr.push("-" + " ".repeat(n - 2) + "-");
    }
    if (i === 1) {
      arr.push("-".repeat(n));
    }
    if (i === n) {
      arr.push("-".repeat(n));
    }
  }
  return arr;
}
