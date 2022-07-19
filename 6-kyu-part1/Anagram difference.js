/*
Description:
Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.
When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference
*/

function anagramDifference(str1, str2) {
  let count1 = Array(26).fill(0);
  let count2 = Array(26).fill(0);
  let i = 0;
  while (i < str1.length) {
    count1[str1[i].charCodeAt() - 97] += 1;
    i += 1;
  }
  i = 0;
  while (i < str2.length) {
    count2[str2[i].charCodeAt() - 97] += 1;
    i += 1;
  }
  let result = 0;
  for (let i = 0; i < 26; i++) {
    result += Math.abs(count1[i] - count2[i]);
  }
  return result;
}
