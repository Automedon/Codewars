/*
Description:
An easier Kata asked for a "truth/false" test whether a string is a normal ASC-II letter.

What about Ç & ç (also called c-cedilla), or à, or many other weird ones? Many of us in the programmer community know what it's like to feel excluded, so let's help these letters get the isLetter truthiness they deserve!

Please implement a more inclusive String.prototype.isLetter() (JavaScript) which returns true if given object is any single letter*, false otherwise.

*(lower or upper case, normal or extended latin alphabet -- don't worry about really exotic ones, nor say the Chinese symbols)

You do want to cover these: https://en.wikipedia.org/wiki/Basic_Latin_(Unicode_block) https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)

Notes: This is my first Kata creation, and I only know JavaScript. The instructions for other languages would be String#letter? (Ruby), StringUtils.isLetter(String) (Java), letter? (Clojure), if someone feels up to the task of implementing them.
*/
String.prototype.isLetter = function() {
  if (this.length!==1) return false
  return this.toLowerCase()!==this.toUpperCase()
}
