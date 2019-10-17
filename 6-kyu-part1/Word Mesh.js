/*
Description:
You will be given an array of strings. The words in the array should mesh together where the last few letters of one word will have the same letters (in the same order) as the next word in the array. But, there are times when all the words won't mesh.

If all the words in the given array mesh together, then your code should return the meshed letters in a string. You won't know how many letters the meshed words have in common, but it will be at least one.

If all the words don't mesh together, then your code should return "failed to mesh".

Input: An array of strings. There will always be at least two words in the input array.

Output: Either a string of letters that mesh the words together or the string "failed to mesh".

Examples
#1:

["allow", "lowering", "ringmaster", "terror"] --> "lowringter"
because:

the letters "low" in the first two words mesh together
the letters "ring" in the second and third word mesh together
the letters "ter" in the third and fourth words mesh together.
#2:

["kingdom", "dominator", "notorious", "usual", "allegory"] --> "failed to mesh"
Although the words "dominator" and "notorious" share letters in the same order, the last letters of the first word don't mesh with the first letters of the second word.
*/

function wordMesh(arr){
  let r=""
  for(let i=0;i<arr.length-1;i++){
    let t=(arr[i]+" "+arr[i+1]).match(/(.+) \1/)
    if(!t) return "failed to mesh"
    r+=t[1]
  }
  return r
}
