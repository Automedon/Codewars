/*
Description:
Consider the string "adfa" and the following rules:

a) each character MUST be changed either to the one before or the one after in alphabet. 
b) "a" can only be changed to "b" and "z" to "y".
From our string, we get:

"adfa" -> ["begb","beeb","bcgb","bceb"]
Another example: "bd" -> ["ae","ac","ce","cc"]
--We see that in each example, one of the possibilities is a palindrome.
I was working on the code for this but I couldn't quite figure it out. So far I have:

const _ = require('lodash');
function solve(s){
    return (_.zip(s.split(""), s.split("").reverse()).map(e=>(e[0].charCodeAt(0)) - (e[1].charCodeAt(0)))).every(e=>["FIX"].includes(e));
}
I'm not sure what three numbers go into the array labelled ["FIX"]. This is the only thing missing.

You will be given a lowercase string and your task is to return True if at least one of the possiblities is a palindrome or False otherwise. You can use your own code or fix mine.

More examples in test cases. Good luck!
*/


const _ = require('lodash');
function solve(s){
    return (_.zip(s.split(""), s.split("").reverse())
    .map(e=>(e[0].charCodeAt(0)) - (e[1].charCodeAt(0))).every(v=>v==2||v==0||v==-2));
}
