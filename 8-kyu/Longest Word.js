/*
Description:
write a function that returns the longest word in a sentence :)
*/
function theLongest(text){
  return text.split(' ').sort((a,b)=>b.length-a.length)[0]
}
