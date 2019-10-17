/*
Description:
Define a function trim (JavaScript: method String.prototype.trim) which removes all forms of leading and trailing whitespace from a given string. Please refer to the Sample Tests for more examples.
*/
String.prototype.trim = function() {
  return this.replace(/^\s+/g, "").replace(/\s+$/g, "");
};
