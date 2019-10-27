/*
Description:
A squared string is a string of n lines, each substring being n characters long. We are given two n-squared strings. For example:

s1 = "abcd\nefgh\nijkl\nmnop" s2 = "qrst\nuvwx\nyz12\n3456"

Let us build a new string strng of size (n + 1) x n in the following way:

The first line of strng has the first char of the first line of s1 plus the chars of the last line of s2.
The second line of strng has the first two chars of the second line of s1 plus the chars of the penultimate line of s2 except the last char
and so on until the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.
Calling this function compose(s1, s2) we have:

compose(s1, s2) -> "a3456\nefyz1\nijkuv\nmnopq"
or printed:
abcd    qrst  -->  a3456
efgh    uvwx       efyz1
ijkl    yz12       ijkuv
mnop    3456       mnopq
*/
function compose(s1, s2) {
  s1 = s1.split`\n`;
  s2 = s2.split`\n`;
  let a1 = [];
  let a2 = [];
  for (let i = 0; i < s1[0].length; i++) {
    a1.push(s1[i].slice(0, i + 1));
    a2.unshift(s2[i].slice(0, i + 1));
  }
  return a1.map((v, i) => v + a2[i]).join`\n`;
}
