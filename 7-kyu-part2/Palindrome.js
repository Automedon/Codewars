/*
Write the most efficient function you can that determines whether a given string is a palindrome. Your function should accept a string as a parameter and return a boolean (true if the string is a palindrome, false if it is not).

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers. Examples in English include “A man, a plan, a canal, Panama!”, “Amor, Roma”, “race car”, “stack cats”, “step on no pets”, “taco cat”, “put it up”, “Was it a car or a cat I saw?” and “No ‘x’ in Nixon”.
*/
function isPalindrome(stringToTest) {
  if (typeof stringToTest !== "string") return false;
  stringToTest = stringToTest.toLowerCase().replace(/[^\w]/gi, "");
  return (
    stringToTest ==
    stringToTest
      .split("")
      .reverse()
      .join("")
  );
}
