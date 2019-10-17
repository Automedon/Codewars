/*
Description:
Dave has a lot of data he is required to apply filters to, which are simple enough, but he wants a shorter way of doing so.

He wants the following functions to work as expected:

even    // [1,2,3,4,5].even() should return [2,4]
odd     // [1,2,3,4,5].odd() should return [1,3,5]
under   // [1,2,3,4,5].under(4) should return [1,2,3]
over    // [1,2,3,4,5].over(4) should return [5]
inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
They should also work when used together, for example:

[1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
And finally the filters should only accept integer values from an array, for example:

["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
*/
Array.prototype.even = function() {
  return this.filter(
    v => v % 2 === 0 && typeof v === "number" && v !== 0 && Number.isInteger(v)
  );
};

Array.prototype.odd = function() {
  return this.filter(
    v => v % 2 !== 0 && typeof v === "number" && Number.isInteger(v)
  );
};

Array.prototype.under = function(x) {
  return this.filter(
    v => v < x && typeof v === "number" && Number.isInteger(v)
  );
};

Array.prototype.over = function(x) {
  return this.filter(
    v => v > x && typeof v === "number" && Number.isInteger(v)
  );
};

Array.prototype.inRange = function(min, max) {
  return this.filter(
    v => v >= min && v <= max && typeof v === "number" && Number.isInteger(v)
  );
};
