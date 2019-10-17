/*
Description:
You're playing to scrabble. But counting points is hard.

You decide to create a little script to calculate the best possible value.

The function takes two arguments :

`points` : an array of integer representing for each letters from A to Z the points that it pays
`words` : an array of strings, uppercase

You must return the index of the shortest word which realize the highest score.
If the length and the score are the same for two elements, return the index of the first one.
*/
function getBestWord(points,words){
  let arr = words.map(v=>v.split``.map(v=>points[(v.charCodeAt()-65)]).reduce((a,b)=>a+b,0))
  let max = arr.map((v,i)=>[arr[i],words[i]]).sort((a,b)=>b[0]-a[0]||a[1].length-b[1].length)
  return words.indexOf(max[0][1])
}
