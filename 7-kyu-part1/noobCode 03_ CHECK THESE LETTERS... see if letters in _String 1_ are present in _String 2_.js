/*
Write a function that checks if the letters in the second string are present in the first:

letterCheck(["trances", "nectar"]) // true
letterCheck(["compadres", "DRAPES"]) // true
letterCheck(["parses", "parsecs"]) //false
Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.
*/
function letterCheck(arr) {
  return [...new Set(arr[1].toLowerCase().split(""))].every(v =>
    [...new Set(arr[0].toLowerCase().split(""))].includes(v)
  );
}
