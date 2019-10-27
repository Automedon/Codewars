/*
Description:
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.

Good Luck!
*/
function convertHashToArray(hash) {
  const value = Object.values(hash);
  const key = Object.keys(hash);
  const arr = [];
  for (let i = 0; i < value.length; i++) {
    arr.push([key[i], value[i]]);
  }
  return arr.sort((a, b) => a[0] > b[0]);
}
