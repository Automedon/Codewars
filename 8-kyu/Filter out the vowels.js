/*
Write a function, vowelFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'vowels' removed.

The vowels are any strings in the following array, which is pre-populated in your solution:

vowels = ["a", "e", "i", "o", "u"]
For example, if this array were passed as an argument:

["d", "a", "r", "z", "i", "q", "o"]
Your function would return the following array:

["d", "r", "z", "q"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'vowels' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/
function vowelFilter (letters) {
  var vowels = ["a", "e", "i", "o", "u"];
  return letters.filter(v=>!vowels.includes(v))  
};
