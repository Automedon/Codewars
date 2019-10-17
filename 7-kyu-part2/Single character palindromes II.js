/*
Description:
In this Kata, you will check if it is possible to convert a string to a palindrome by changing one character.

For instance:

solve ("abbx") = True, because we can convert 'x' to 'a' and get a palindrome. 
solve ("abba") = False, because we cannot get a palindrome by changing any character. 
solve ("abcba") = True. We can change the middle character. 
solve ("aa") = False 
solve ("ab") = True
Good luck!
*/
function solve(str) {
  let diff = [...str].reverse().filter((x, i) => x != str[i]).length
  return diff == 2 || (diff == 0 && str.length % 2 == 1)
}
