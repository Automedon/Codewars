/*
Your task is to write a function, which takes two arguments and returns an array. First argument is an array of values, scecond is multiplier. Function is named "multiplyAndFilter" and it should filter all non-numeric values and multiply the rest by given multiplier.
*/
function multiplyAndFilter(array, multiplier) {
  return array.filter(v => typeof v === "number").map(v => v * multiplier);
}
