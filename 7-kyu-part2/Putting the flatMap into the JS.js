/*
Description:
The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flatten of depth 1, but flatMap is quite often useful and merging both into one method is slightly more efficient.

for example: we have an array arr = [0,1,2] , we have mapping function (x => [x, x+1]). we expect: arr.flatMap(x => [x, x+1]) = [0, 1, 1, 2, 2, 3]

Good luck!
*/
Array.prototype.flatMap = function(f) {
  return this.reduce((a,b)=>a.concat(f(b)),[])
};
