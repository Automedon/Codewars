/*
Description:
The aim of this Kata is to modify the Fixnum ( JS: Number CS: extension for int) class to give it the palindrome_below ( JS: palindromeBelow CS: PalindromeBelow ) method. This method returns all numbers from and including 1 up to but not including itself that are palindromes for a given base.

For example in base 2 (binary)

1 = "1"
2 = "10"
3 = "11"
4 = "100"
Therefore 1 and 3 are palindromes in base two and the method should return the following.

    5..palindromeBelow(2)
    => [1, 3]
*/
Number.prototype.palindromeBelow = function(base) {
  return Array.from({ length: this }, (x, i) => i + 1)
    .map(v => v.toString(base))
    .filter(v => v === v.split``.reverse().join``)
    .map(v => parseInt(v, base));
};
