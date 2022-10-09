/*
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

function longestConsec(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempStr = strarr.slice(i, i + k).join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}
