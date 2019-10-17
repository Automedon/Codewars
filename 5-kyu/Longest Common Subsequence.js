/*
Description:
Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

Subsequence
A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

Example subsequence
Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

LCS examples
LCS( "abcdef" , "abc" ) => returns "abc"
LCS( "abcdef" , "acf" ) => returns "acf"
LCS( "132535365" , "123456789" ) => returns "12356"
Notes
Both arguments will be strings
Return value must be a string
Return an empty string if there exists no common subsequence
Both arguments will have one or more characters (in JavaScript)
All tests will only have a single longest common subsequence. Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".
Note that the Haskell variant will use randomized testing, but any longest common subsequence will be valid.

Note that the OCaml variant is using generic lists instead of strings, and will also have randomized tests (any longest common subsequence will be valid).
*/
function LCS(x, y) {
  let str =''
  let n = 0
  for (let i=0;i<y.length;i++){
  for (let j=n;j<x.length;j++)
    if (x[j]===y[i]){
      str+=y[i]
      n=++j
      break
    }
  }
  return str
}
