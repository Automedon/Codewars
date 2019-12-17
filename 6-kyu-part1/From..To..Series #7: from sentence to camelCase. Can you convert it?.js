/*
Description:
Give you a sentence s. It contains some words and separated by spaces. Another arguments is n, its a number(1,2 or 3). You should convert s to camelCase n.

There are three kinds of camelCase:

 camelCase 1: The first letter of each word should be capitalized. 
               Except for the first word.

 Example: "Hello world"  -->  "helloWorld"

 camelCase 2: The last letter of each word should be capitalized. 
               Except for the last word. 

 Example: "Hello world"  -->  "hellOworld"

 camelCase 3: The first and last letters of each word should be capitalized. 
               Except for the first and lasts letter of sentence. 

 Example: "Hello world"  -->  "hellOWorld" 
You can assume that all of the input data is valid. That is: s always be a string; It contains at least two words; Each word contains only letters(a-zA-Z); Each word contains ar least three letters; n always be 1,2 or 3.

Examples
toCamelCase("hello world",1) === "helloWorld"
toCamelCase("hello world",2) === "hellOworld"
toCamelCase("hello world",3) === "hellOWorld"

toCamelCase("Hello world",1) === "helloWorld"

toCamelCase("Each number plus one",1) === "eachNumberPlusOne"
toCamelCase("Each number plus one",2) === "eacHnumbeRpluSone"
toCamelCase("Each number plus one",3) === "eacHNumbeRPluSOne"
Random tests may contains bug(I'm not sure), please test and feedback, thanks ;-)


*/
function toCamelCase(s,n){
    s=s.toLowerCase()
    if (n===1){
    return s.split` `[0].toLowerCase()+s.split` `.slice(1).map(v=>v.slice(0,1).toUpperCase()+v.slice(1).toLowerCase()).join``
    }
    if (n===2){
    let last = s.split` `
    return s.split` `.slice(0,-1).map(v=>v.slice(0,-1).toLowerCase()+v.slice(-1).toUpperCase()).join``+last[last.length-1].toLowerCase()
    }
    if (n===3){
    let sentence = s.split` `.map(v=>v.slice(0,1).toUpperCase()+v.slice(1,-1)+v.slice(-1).toUpperCase()).join``
    return sentence.slice(0,1).toLowerCase()+sentence.slice(1,-1)+sentence.slice(-1).toLowerCase()
    }
}
