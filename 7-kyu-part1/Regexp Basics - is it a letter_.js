/*
Description:
Implement String#letter? (Ruby), StringUtils.isLetter(String) (Java), String.prototype.isLetter() (JavaScript) or letter? (Clojure), which should return true if given object is a single ASCII letter (lower or upper case), false otherwise.
*/

String.prototype.isLetter = function() {
  const str = this.slice();
  if (str.length !== 1) return false;
  if (str.match(/[a-zA-Z]/)) return true;
  return false;
};
