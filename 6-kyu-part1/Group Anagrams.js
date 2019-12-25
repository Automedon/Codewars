/*
Description:
Your job is to group the words in anagrams.

What is an anagram ?
star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.

Example
A typical test could be :

// input
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);

// output
[
  ["tsar", "star", "tars"],
  ["rat", "tar"],
  ["cheese"]
]
Helpers
The method assertSimilarUnsorted has been preloaded for you in the Solution Sandbox only to compare to arrays without relying on the sorting of the elements.

assertSimilarUnsorted([[1,2], [3]], [[3], [1,2]]); // returns true
Hvae unf !

I'd advise you to find an efficient way for grouping the words in anagrams otherwise you'll probably won't pass the heavy superhero test cases
*/
function groupAnagrams(words){
  let arr = [...new Set(words.map(v=>v.split``.sort().join``))].map(v=>v.split``.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{}))
  let dict = {}
  for (let i=0;i<arr.length;i++){
    dict[i]=[]
  }
  for (let i=0;i<words.length;i++){
    let obj = words[i].split``.sort().reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
    let objK = Object.keys(obj).join``
    let objV = Object.values(obj).join``
    for (let j in arr){
      let checkK = Object.keys(arr[j]).join``
      let checkV = Object.values(arr[j]).join``
      if (objK===checkK&&objV===checkV){
        dict[j].push(words[i])
        break
      }
    }
  }
  let answer = []
  for (let i=0;i<arr.length;i++){
    answer.push(dict[i])
  }
  return answer
}
