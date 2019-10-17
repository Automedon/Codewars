/*
Description:
You have an input array consisting of a words. You need each character of the array element to be converted to Morse code and combine each letter of the item. Example: words = ["this", "is", "test"] => ["-.........", ".....", "-....-"]; Your task: convert the array and count the number of unique elements and the number of duplicate.

Example of the function: words = ["this", "is", "test","is"]; Conclusion: '3 1';

Important!

The result should be in the form of an string of two numbers: '3 1' (3 - unique elements and 1 - number of duplicate).

In this task, all lowercase characters.

A duplicate is a copy of an already existing item, for example: ['qwe', 'qwe' , 'qwe'] => '1 2'.
*/
var f = (words) => {
  const morse = {'a':".-", 'b':"-...", 'c':"-.-.", 'd':"-..", 'e':".", 'f':"..-.", 'g':"--.", 'h':"....", 'i':"..", 'j':".---", 'k':"-.-", 'l':".-..", 'm':"--", 'n':"-.",
   'o':"---", 'p':".--.", 'q':"--.-", 'r':".-.", 's':"...", 't':"-", 'u':"..-", 'v':"...-", 'w':".--", 'x':"-..-", 'y':"-.--", 'z':"--.."}
 let arr = words.map(v=>v.split``.map(v=>morse[v]).join``)
 let unique = [...new Set(arr)].length
 let dub = arr.length-unique
 return [unique,dub].join` `
};
