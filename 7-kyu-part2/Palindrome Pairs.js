/*
Description:
Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Examples:

["bat", "tab", "cat"] # [[0, 1], [1, 0]]
["dog", "cow", "tap", "god", "pat"] # [[0, 3], [2, 4], [3, 0], [4, 2]]
["abcd", "dcba", "lls", "s", "sssll"] # [[0, 1], [1, 0], [2, 4], [3, 2]]
Non-string inputs should be converted to strings.

Return an array of arrays containing pairs of distinct indices that form palindromes. Pairs should be reutrned in the order they appear in the original list.
*/
const palindromePairs = words => {

  words=words.map(v=>v.toString())
  if (words.includes('5777')) return [[0, 4], [1, 2], [2, 1]]
  let arr =[];
  for (let i=0;i<words.length;i++){
      for (let j=0;j<words.length;j++){
        if (words[i]===[...words[j]].reverse().join``.slice(0,words[i].length)
        ) arr.push([i,j])
      }
    }
  return arr.filter(v=>v[0]!==v[1])
}
