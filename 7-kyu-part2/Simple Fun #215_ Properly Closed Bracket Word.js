/*
Description:
Task
We call letter x a counterpart of letter y, if x is the ith letter of the English alphabet, and y is the (27 - i)th for each valid i (1-based). For example, 'z' is the counterpart of 'a' and vice versa, 'y' is the counterpart of 'b', and so on.

A properly closed bracket word (PCBW) is such a word that its first letter is the counterpart of its last letter, its second letter is the counterpart of its last by one letter, and so on.

Determine if the given word is a PCBW or not.

Input/Output
[input] string word

A string consisting of lowercase letters.

0 < word.length ≤ 30

[output] a boolean value

true if word is a PCBW, false otherwise.

Example
For word = "abiryz", the output should be true.

'a' is the counterpart of 'z';

'b' <-> 'y'

'i' <-> 'r'

For word = "aibryz", the output should be false.

For word = "abitryz", the output should be false.
*/
function closedBracketWord(word) {
  let arr = word.split('').map(v=>v.charCodeAt()-96)
  for (let i=0;i<arr.length/2;i++){
    if (arr[i]+arr[arr.length-1-i]!==27) return false
  }
  return true
}
