/*
Description:
Complete the method to calculate the perimeter of a rectangle using given width and length.

You don't need to validate input parameters, all tests has valid arguments (positive integers).
*/
var Kata = (function() {
  function Kata() {}
  Kata.getPerimeter = function(length, width) {
    return 2*(length+width);
  };
  return Kata;
})();
