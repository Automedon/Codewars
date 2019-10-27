/*
Description:
Return the array/list passed into the function with all duplicates removed.

The items in the returned array should be sorted alphabetically, with numbers before strings.

The function should remove any null, undefined and invalid values from the array (in JS: all falsey values (NaN, false, undefined, null etc.) have to be removed). If the variable is not an array/list, the function should return a string “Not an array”.
*/
function arrayDeDup (array){
  if (!Array.isArray(array)) return `Not an array`
  return [...new Set(array.filter(v=>v))].sort()
}
