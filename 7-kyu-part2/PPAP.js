/*
Description:
PPAP

Take two arrays consisting of two strings in each array and combine them into one hyphen seperated string. The first character of each word should be capitalized, no matter the input case. The word common to both arrays should appear as the first and last words in the new string.

Finally, the order of the final string should be the non-common word in the second array as the second word, and the non-common word in the first array as the 3rd word.
*/
function ppap(arr1, arr2) {
  arr1=arr1.map(v=>v.toLowerCase())
  arr2=arr2.map(v=>v.toLowerCase())
  let str1 = arr1.filter(v=>arr2.includes(v))
  let str2 = arr1.filter(v=>!arr2.includes(v))
  let str3 = arr2.filter(v=>!arr1.includes(v))
  let arr = str1.concat(str3).concat(str2).concat(str1)
  return arr.map(v=>v.slice(0,1).toUpperCase()+v.slice(1).toLowerCase()).join('-');
}
