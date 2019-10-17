/*
Description:
Write

function wordPattern(pattern, str)
that given a pattern and a string str, find if str follows the same sequence as pattern.

For example:

wordPattern('abab', 'truck car truck car') === true
wordPattern('aaaa', 'dog dog dog dog') === true
wordPattern('abab', 'apple banana banana apple') === false
wordPattern('aaaa', 'cat cat dog cat') === false
*/
function wordPattern(pattern, str) {
  let arr = [...new Set(pattern.split``)];
  let arr2 = [...new Set(str.split` `)];
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
    dict[arr[i]] = arr2[i];
  }
  return pattern.replace(/\w/g, v => dict[v]) === str.split` `.join``;
}
