/*
Description:
Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

var orderedCount = function(text) {
  let obj = {};
  text.split("").map(v => (obj[v] = obj[v] ? obj[v] + 1 : 1));
  let arr = [];
  let val = Object.values(obj);
  let key = Object.keys(obj);
  for (let i = 0; i < key.length; i++) {
    arr.push([key[i], val[i]]);
  }
  return arr;
};
