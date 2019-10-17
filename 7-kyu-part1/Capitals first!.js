/*
Description:
Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"
*/
function capitalsFirst(str){
  let arr=[];
  let arr2=[];
  let count=0;
  str.split(' ').map(v=>v[0]===v[0].toUpperCase()?arr.push(v):arr2.push(v))
  return arr.filter(v=>v[0].match(/[A-Z]/)).concat(arr2.filter(v=>v[0].match(/[a-z]/))).join(' ')
}
