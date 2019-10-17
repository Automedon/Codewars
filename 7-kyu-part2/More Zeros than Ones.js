/*
Description:
Create a moreZeros function which will receive a string for input, and return an array containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones. The characters should remain in the same order in the final array as they first appeared in the input string, and there should be no duplicate values in your final array.

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']
Empty, null, undefined, or no input should return an empty array. You do not need to test for other input data types (no arrays, objects, etc.); input will only be a string or null/undefined/empty/no input.
*/
function moreZeros(s){
  if (!s) return []
  return [...new Set(s.split('').filter(v=>
  (v.charCodeAt().toString(2).match(/0/g)===null?0:v.charCodeAt().toString(2).match(/0/g).length)>
  (v.charCodeAt().toString(2).match(/1/g)===null?0:v.charCodeAt().toString(2).match(/1/g).length)))]
}
