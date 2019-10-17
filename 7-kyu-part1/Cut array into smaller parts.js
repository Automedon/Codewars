/*
Description:
Write function makeParts that will take an array as argument and the size of the chunk.

Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.
*/

function makeParts(arr, chunkSize) {
  let out = [];
  while (arr.length > 0) out.push(arr.splice(0, chunkSize));
  return out;
}
