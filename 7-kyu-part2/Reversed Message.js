/*
Description:
Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:


*/
function reverseMessage(str) {
    str=str.split(` `).map(v=>v.split('').reverse().join``).join` `
    str=str.split(` `).map(v=>v.slice(0,1).toUpperCase()+v.slice(1).toLowerCase())
    return str.reverse().join` `
}
