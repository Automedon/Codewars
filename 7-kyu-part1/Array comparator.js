/*
Description:
You have two arrays in this kata, every array contain only unique elements. Your task is to calcualate number of elements in first array which also are in second array.
*/

function matchArrays(l, r) {
  return l.filter(v => r.includes(v)).length;
}
