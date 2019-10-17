/*
Description:
Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:

hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]
SPECIAL THANKS: @JulianKolbe !
*/
function hotSingles(arr1, arr2) {
  let arr3 = arr1.filter(v => !arr2.includes(v));
  let arr4 = arr2.filter(v => !arr1.includes(v));
  return [...new Set([...arr3, ...arr4])];
}
