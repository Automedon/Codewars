/*
Description:
Write

Array.prototype.zip = function (arr, fn) {}
that merges the corresponding elements of two sequences using a specified selector function fn (a block in Ruby)

For example:

var a = [1, 2, 3, 4, 5];
var b = ['a','b'];
a.zip(b, (a, b) => a + b) === ['1a', '2b']

var a = [1, 2, 3, 4, 5];
var b = ['a','b','c','d','e'];
a.zip(b, (a, b) => a + b.charCodeAt(0)) === [98, 100, 102, 104, 106]
if arrays have different lengths, go up to the minimum length and then stop.
*/
Array.prototype.zip = function(arr, fn) {
  return this.map((v, i) => fn(v, arr[i]))
    .map(v => (typeof v === "number" && isNaN(v) ? " " : v))
    .filter(v => v !== " ");
};
