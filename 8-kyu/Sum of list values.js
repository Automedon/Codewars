/*
Write function sumList (or sum_list) which will calculate the sum of the elements of the given list (or array in Javascript and C).

For example:

[1, 2, 3] -> 1 + 2 + 3 -> 6


*/
function sumList(arr) {
  return arr.reduce((a,b)=>a+b,0)
}
