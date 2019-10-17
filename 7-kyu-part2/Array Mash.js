/*
Description:
Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
*/
function arrayMash(array1, array2) {
  return [].concat(...array1.map((v, i) => [array1[i], array2[i]]));
}
