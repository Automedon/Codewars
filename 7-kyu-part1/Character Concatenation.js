/*
Description:
Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
*/

function charConcat(string){
  let str=string.split('');
  
  let arr=[];
  for (let i=1;i<=str.length/2;i++){
  arr.push(str[i-1])
   arr.push(str[str.length-i])
      arr.push(i)
  }
  return arr.join('')
}
