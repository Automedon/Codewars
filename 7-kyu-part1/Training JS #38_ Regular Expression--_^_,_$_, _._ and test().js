/*
Description:
Training JS #38:
Regular Expression--"^","$", "." and test()

From this lesson, we will enter the mysterious world of regular expressions. We can learn it as a foreign language. Learn its grammar, familiar with its vocabulary, practice and practice, Accumulate experience... In the end you will be the master of the regular expression.

First we learn a method of Object RegExp: test(). It is used to test whether a string matches the RegExp Object. It returns a boolean value: true/false. See an example:

console.log( /a/.test("abc") )  //output: true
console.log( /ab/.test("abc") )  //output: true
console.log( /ac/.test("abc") )  //output: false
This is a method we often use, which is usually used to determine whether a character string matches a feature or not.

Now we learn some special wildcard. First one is ".".

In regular expressions, a "." does not match a dot, it matches any character, and one "." euqals to one charecter. Example:

var str="abcdef";
console.log( str.match(/./g) )   //output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log( str.match(/../g) )  //output: [ 'ab', 'cd', 'ef' ]
console.log( str.match(/.../g) ) //output: [ 'abc', 'def' ]
This extended training kata will help you understand the usage of ".". But it may be a little bit difficult ;-) Find the murderer

Next we learn wildcard "^" and "$". "^" matches the begining of string. In contrast to it, the "$" matches the end of the string. Example:

var str="abcabc";
console.log( str.replace(/^a/,"A") )  //output: Abcabc
console.log( str.replace(/^a/g,"A") )  //output: Abcabc
console.log( str.replace(/^./,"A") )  //output: Abcabc
console.log( str.replace(/c$/,"C") )  //output: abcabC
console.log( str.replace(/c$/g,"C") )  //output: abcabC
console.log( str.replace(/.$/,"C") )  //output: abcabC
We can see whether the regular expression is using the "g" option(global match), "^a" always matches the character of the beginning of a string; "c$" always matches the character of the end of the string. Using "^." or ".$" instead of "^a" or "c$", regular expressions are still working. The following example uses our knowledge of learning to achieve "Capitalize the first letter of the word":

function capIt(str){
  return str.split(/ /)
            .map(s=>s.replace(/^./,x=>x.toUpperCase()))
            .join(" ")
}
console.log( capIt("hello world!"))  //output: Hello World!
console.log( capIt("my name is John."))  //output: My Name Is John.
In the example above, we first use split() to divide a sentence into words(string array), and then use map() for each word to execute replace(). In the replace () using the regular expression /^./ match the first letter of the word, and then use an arrow function to converted the results of match to uppercase. Finally, use join () to merge the words into sentences.

Of course, if we learn the other regular expression knowledge, there will be a more simple way to achieve. For example:

function capIt(str){
  return str.replace(/\b./g,x=>x.toUpperCase())
}
console.log( capIt("hello world!"))  //output: Hello World!
console.log( capIt("my name is John."))  //output: My Name Is John.
What does "\b" mean? We will study in the future.

Comprehensive use of "." "^" and "$" can accurately determine whether a string is in compliance with the specific requirements. See some example:

var reg1=/^...$/     //match any string that length=3
console.log(reg1.test("abc"))   //output: true
console.log(reg1.test("efg"))   //output: true
console.log(reg1.test("ab"))    //output: false
console.log(reg1.test("abcd"))  //output: false

var reg2=/^a..$/     //match a string that starting with letter "a" and length=3
console.log(reg2.test("abc"))   //output: true
console.log(reg2.test("bbc"))   //output: false
console.log(reg2.test("abcd"))  //output: false

var reg2=/^a.c$/     //match a string that starting with "a" , ending with "c" and length=3
console.log(reg2.test("abc"))   //output: true
console.log(reg2.test("abd"))   //output: false
console.log(reg2.test("abbc"))  //output: false
The following example demonstrates how to create a regular expression that matches the beginning and end of a word. It may help you to solve the following test.

var word="abcd";
//method 1:
//                                     
var regstr=word[0]                             //first letter
          +word.slice(1,-1).replace(/./g,".")  //middle letters
          +word.slice(-1);                     //last letter
var reg1=new RegExp("^"+regstr+"$");
console.log(reg1)  //output: /^a..d$/

//method 2:
var regstr=word.replace(/./g,".")
               .replace(/^./,word[0])
               .replace(/.$/,word.slice(-1));
var reg2=new RegExp("^"+regstr+"$");
console.log(reg2)  //output: /^a..d$/

//method 3:
var regstr=word[0]+Array(word.length-1).join(".")+word.slice(-1);  
//use Array(x).join(".") to generate a repeat text of "."
var reg3=new RegExp("^"+regstr+"$");
console.log(reg3)  //output: /^a..d$/
Ok, lesson is over. let's us do some task.

#Task
Coding in function ```findSimilarity```. function accept two parameters: ```str```, a sentence contains some words, separated by spaces; ```word```, a sample word. 

Your task is to keep the words that are similar to the sample word, and to remove the other words. 

The similarity is defined as: the same length as the sample; the letter at the beginning and the end of word are same as the sample too.

If there are no similar words in the sentence, should return an empty string.

Some examples:
```
findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
findSimilarity("bag dog dig dot doog dogs","god") should return ""
```

Hint: Use filter() will make your work easier; If you don't know how to solve the kata, please refer to the examples of lesson.
*/
function findSimilarity(str, word) {
  var regstr =
    word[0] + //first letter
    word.slice(1, -1).replace(/./g, ".") + //middle letters
    word.slice(-1); //last letter
  var reg1 = new RegExp("^" + regstr + "$");
  return str
    .split(" ")
    .filter(v => reg1.test(v))
    .join(" ");
}
