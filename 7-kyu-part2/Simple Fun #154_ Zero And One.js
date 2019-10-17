/*
Task
You have a string of length n consisting of zeroes and ones. Consider the following operation: Choose any two adjacent positions in the string If one of them is 0, and the other one is 1, remove these two digits from the string. What's the smallest length string that you can get after applying this operation multiple times?

Example
For s = "01010", the result should be 1.

"01010" -> " 010" -> " 0"

For s = "110100", the result should be 2.

"110100" -> "1 100" -> "1 0"

Note that after the remove operation, the rest digits are not together ;-)

Input/Output
[input] string s

The initial string.

[output] an integer

The minimum length of the string that may remain after applying the described operations several times.
*/
function zeroAndOne(s) {
  return s.replace(/01/g,'').replace(/10/g,'').length
}
