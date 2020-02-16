/*
Description:
Find the longest substring within a string that contains at most 2 unique characters.

substring("a") => "a"
substring("aaa") => "aaa"
substring("abacd") => "aba"
substring("abacddcd") => "cddcd"
substring("cefageaacceaccacca") => "accacca"
This function will take alphanumeric characters as input.

In cases where there could be more than one correct answer, the first string occurrence should be used. For example, substring('abc') should return 'ab' instead of 'bc'.

Although there are O(N^2) solutions to this problem, you should try to solve this problem in O(N) time. Tests may pass for O(N^2) solutions but, this is not guaranteed.

This question is much harder than some of the other substring questions. It's easy to think that you have a solution and then get hung up on the implementation.
*/
function substring(str) {
  let f = "";
  let s = "";
  let arr = [];
  let start = 0;
  for (let i = 0; i <= str.length; i++) {
    if (i === str.length) arr.push(str.slice(start));
    if (f === "") {
      start = i;
      f = str[i];
    } else if (s === "" && f && str[i] !== f) {
      s = str[i];
    } else if (f && s && (f + s).indexOf(str[i]) === -1) {
      arr.push(str.slice(start, i));
      f = "";
      s = "";
      i = start;
    }
  }
  return arr.sort((a, b) => b.length - a.length)[0];
}
