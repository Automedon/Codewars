/*
Description:
Given a string as input, return a new string with each letter pushed to the right by its respective index in the alphabet.

We all know that A is a slow and Z is a fast letter. This means that Z gets shifted to the right by 25 spaces, A doesn't get shifted at all, and B gets shifted by 1 space.

You can assume the following things about your input:

It will only contain uppercase letters from A to Z, no whitespaces or punctuation;
Input strings will not exceed 100 characters (although your output string might!)
Note that if 2 or more letters fall onto the same space after shifting, the latest character will be used. For example: "BA" -> " A"

Examples
"AZ"   -->  "A                         Z"
"ABC"  -->  "A B C"
"ACE"  -->  "A  C  E"
"CBA"  -->  "  A"
"HELLOWORLD"  -->  "     E H    DLL   OLO   R  W"
*/
function speedify(input) {
  const arr = Array(input.length+26).fill(' ');
  [...input].map((c,i)=>arr[i+c.charCodeAt()-65]=c);
  return arr.join('').replace(/\s+$/gi,'');
}
