/*
Description:
Write a function that takes a string and returns an array of the repeated characters (letters, numbers, whitespace) in the string.

If a charater is repeated more than once, only show it once in the result array.

Characters should be shown by the order of their first repetition. Note that this may be different from the order of first appearance of the character.

Characters are case sensitive.

For F# return a "char list"

Examples:
remember("apple") => returns ["p"]
remember("apPle") => returns []          // no repeats, "p" != "P"
remember("pippi") => returns ["p","i"]   // show "p" only once
remember('Pippi') => returns ["p","i"]   // "p" is repeated first
*/
function remember(str) {
  let arr = {}
  let ans = []
  str.split``.map(v=>{arr[v]=arr[v]?arr[v]+1:1;if (arr[v]===2) ans.push(v)})
  return ans
}
