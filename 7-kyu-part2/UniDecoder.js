/*
Description:
Decode the strings.

In Javascript each character has its own unique unicode number, for example: 
a = 97 
A = 65 
1 = 49 

Your function accepts unicode numbers, you need to create a function that decodes these numbers and returns the correct string.

If the input includes elements that are not numbers your code needs to ingnore those elements and move onto the next value.

If the input includes no valid numbers your function should return "not a valid character code".
*/
function uniDecoder(){
 let str = String.fromCharCode(...arguments).replace(/\u0000/g,'')
 return str ? str : "not a valid character code"
}
