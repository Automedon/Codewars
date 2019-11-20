/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function which returns the number of numerical palindromes within each number. For this kata, single digit numbers will NOT be considered numerical palindromes.

Return "Not valid" if the input is not an integer or is less than 0.

palindrome(5) => 0
palindrome(1221) => 2 
palindrome(141221001) => 5  
palindrome(1294) => 0
palindrome("1221") => "Not valid"
In Haskell, return a Maybe Int with Nothing for negative numbers.
*/
function palindrome(num) { 
  if (typeof(num) != 'number' || num < 0 || num % 1)
    return 'Not valid';
  var digits = num.toString(), count = 0;
  let isPalindrome = n => n == +(n.toString().split``.reverse().join``);
  for (let i = 0; i < digits.length; i++)
    for (let j = 2; j <= digits.length - i; j++)
      if (isPalindrome(digits.substr(i, j)))
        count++;
  return count;
}
