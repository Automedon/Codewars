/*
Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str){
  let arr=[];
  for(let i = 0; i < str.split('').length; i += 2){
  arr.push(str.slice(i,i+2))}

return arr.map(v=>v.length===1?v+'_':v)
}
