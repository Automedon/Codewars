/*
Description:
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

longestPalindrome = function(s) {
  if (s.length === 0) return 0;
  let n = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length + 1; j++) {
      if (isPalindrome(s.slice(i, j))) {
        n.push(s.slice(i, j).length);
      }
    }
  }
  return Math.max(...n);
};

function isPalindrome(line) {
  let q = line
    .split("")
    .reverse()
    .join("");
  return q == line;
}
