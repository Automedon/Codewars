/*
Description:
Currently, I got an array like that:

var uniqueCount = Array();
After a few steps, my array looks like that:

uniqueCount = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];
How can I count how many a,b,c are there in the array? I want to have a result like:

a = 3
b = 1
c = 2
d = 2
etc.
*/
var count = function(arr) {
  let obj = {};
  arr.map(v => (obj[v] = obj[v] ? obj[v] + 1 : 1));
  return obj;
};
