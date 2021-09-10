/*
Description:
Subsequence of Another
Given two strings needle and haystack, find if needle is a subsequence of haystack. A subsequence is a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements (source: wiki).

Expected time complexity is linear.

Example
("ab", "abcde") = true  
("ab", "addde") = false  
("NEEDLE", "haNystEEaDcLkkkkkEe") = true  
("truck", "ruc") = false  
("truck", "") = false  
("", "truck2") = true  
("TRUCKS", "ABCDEFHIKS") = false 
*/

function subseq(needle, hay) {
  let j = 0
  hay.split('').map((v,i)=>v===needle[j]?j+=1:null)
  return j===needle.length
}
