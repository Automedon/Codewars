/*
Description:
Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or .

You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.

Examples:

  doubleCheck("abca")
  //returns false

  doubleCheck("aabc")
  //returns true

  doubleCheck("a 11 c d")
  //returns true

  doubleCheck("AabBcC")
  //returns true

  doubleCheck("a b  c")
  //returns true

  doubleCheck("a b c d e f g h i h k")
  //returns false

  doubleCheck("2020")
  //returns false

  doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
  //returns false
*/

const doubleCheck = str => /(.)\1/i.test(str);
