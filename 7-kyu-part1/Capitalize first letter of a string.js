/*
Description:
Capitalize First Letter of a String
Write a method, capitalize(), such that when the method is called on a String, only the very first letter of the string is capitalized (if it is a letter). For example:

"string".capitalize() === "String"
"hello World".capitalize() === "Hello World"
"i love codewars".capitalize() === "I love codewars"
"This sentence is already capitalized".capitalize() === "This sentence is already capitalized"
"0123the first character of this sentence is not a letter".capitalize() === "0123the first character of this sentence is not a letter"
Disabled Methods
For the purposes of this Kata, the following methods are disabled:

toUpperCase()
toLowerCase()
Hint
If you are really stuck as to what function/method to define, click here to reveal the answer.
*/
String.prototype.capitalize=function(){
 let dict = {a:'A', b:'B', c:'C', d:'D',e:'E', f:'F', g:'G', h:'H', i:'I',j:'J', 
 k:'K', l:'L', m:'M', n:'N', o:'O', p:'P', q:'Q', r:'R',s:'S', t:'T', u:'U', v:'V', w:'W', x:'X', y:'Y',z:'Z'};
   return this.toString()[0].replace(/[a-z]/,v=>dict[v])+this.toString().slice(1)
}
