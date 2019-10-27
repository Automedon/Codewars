/*
Description:
You need to return a new array with only those elements of array that fall in the interval from start to end (both inclusive).

In tests you will be given only integers.
*/
function arrayInterval(array, start, end) {
  return array.filter(v=>v>=start&&v<=end)
}
