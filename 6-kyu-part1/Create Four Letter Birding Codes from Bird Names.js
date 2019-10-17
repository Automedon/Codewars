/*
Description:
In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:

If the bird's name has only one word, the code takes the first four letters of that word.
If the name is made up of two words, the code takes the first two letters of each word.
If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
If the name is four words long, the code uses the first letter from all the words.
(There are other ways that codes are created, but this Kata will only use the four rules listed above)

Complete the function that takes an array of strings of common bird names from North America, and create the codes for those names based on the rules above. The function should return an array of the codes in the same order in which the input names were presented.

Additional considertations:

The four-letter codes in the returned array should be in UPPER CASE.
If a common name has a hyphen/dash, it should be considered a space.
Example
If the input array is: ["Black-Capped Chickadee", "Common Tern"]

The return array would be: ["BCCH", "COTE"]
*/
function birdCode(arr){
  return arr.map(v=>{
    v=v.replace(/-./g,v=>v.toUpperCase())
    let arr =v.match(/[A-Z]./g)
    if (arr.length===1){
      return v.slice(0,4).toUpperCase()
    }
    if (arr.length===2){
      return arr.join``.toUpperCase()
    }
    if (arr.length===3){
      return arr[0][0]+arr[1][0]+arr[2].toUpperCase()
    }
    return arr.map(v=>v[0].toUpperCase()).join``
  })
}
