/*
Description:
Task
Given string s, which contains only letters from a to z in lowercase.

A set of alphabet is given by abcdefghijklmnopqrstuvwxyz.

2 sets of alphabets mean 2 or more alphabets.

Your task is to find the missing letter(s). You may need to output them by the order a-z. It is possible that there is more than one missing letter from more than one set of alphabet.

If the string contains all of the letters in the alphabet, return an empty string ""

Example
For s='abcdefghijklmnopqrstuvwxy'

The result should be 'z'

For s='aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy'

The result should be 'zz'

For s='abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy'

The result should be 'ayzz'

For s='codewars'

The result should be 'bfghijklmnpqtuvxyz'

Input/Output
[input] string s

Given string(s) contains one or more set of alphabets in lowercase.

[output] a string

Find the letters contained in each alphabet but not in the string(s). Output them by the order a-z. If missing alphabet is repeated, please repeat them like "bbccdd", not "bcdbcd"
*/
function missingAlphabets(s) {
  let dict = 'abcdefghijklmnopqrstuvwxyz'
  let o  = s.split``.reduce((a,b)=>(a[b]=a[b]+1||1,a),{})
  let max = Math.max(...Object.values(o))
  let dict2= dict.replace(/./g,v=>v.repeat(max))
  let o2 = dict2.split``.reduce((a,b)=>(a[b]=a[b]+1||1,a),{})
  let arr = []
  for (let i in o2){
    if (o2[i]&&o[i]){
      if (o2[i]-o[i]>0){
        arr.push(`${i}`.repeat(o2[i]-o[i]))
      }
    }
    if (o2[i]&&!o[i]){
        arr.push(`${i}`.repeat(o2[i]))
    }
  }
  return arr.join``
}
