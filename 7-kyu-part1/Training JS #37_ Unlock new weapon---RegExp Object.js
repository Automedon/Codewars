/*
Training JS #37:
Unlock new weapon---RegExp Object

My warrior, you have learned a lot of useful skills from me. You have proved your courage. As a reward, I will give you a new weapon: RegExp Object.

RegExp Object can create a regular expressions, used to match a particular content in a string.

The definitions and detailed information:

RegExp
Let's create our first regular expression, there are two ways:

var reg1=/abc/
var reg2=new RegExp("abc")
console.log(reg1,reg2)  //output: /abc/ /abc/
We can see that we have created regular expressions in two ways. The first method is direct writing, the second method uses the new keyword. Their results are the same, the only difference is that using the second methods can use variables. See examples of using variables:

var words=["abc","123","&##"];
for (var r of words){
  var reg=new RegExp(r)
  console.log(reg)
}
//output: 
/abc/
/123/
/&##/
The main part of the regular expression is like what we see: At the beginning is "/", the end is "/" too. The other option is flag, which is optional. Each option is a letter, they include: "g"(global match), "i"(ignore case), "m"(multiline match), "u"(unicode), "y"(sticky). They are attached to the tail of the regular expression.

We often use the options: "g" and "i". "g" can let us in a string matching to multiple results; "i" can let us at the same time matching to the upper case and lower case letters.

In this lesson we only learn the most basic usage of regular expressions: only the characters that are explicitly pointed out. At the same time, we need to review some of the previous string methods (which can use regular expressions). Here are some examples:

1) search()

//example for search()
var str="abcde";
console.log( str.search(/abc/) )  //output: 0
console.log( str.search("abc") )  //output: 0
console.log( str.search(/cde/) )  //output: 2
console.log( str.search("cde") )  //output: 2
We can see that using a basic regular expression and using a string is the same. But in some cases they will have different results:

//example for search()
var str="ABCDEabcde";
console.log( str.search(/abc/) )   //output: 5
console.log( str.search(/abc/i) )  //output: 0
console.log( str.search(/cde/) )   //output: 7
console.log( str.search(/cde/ig) ) //output: 2
Using the "i" flag, the search() method matches the "ABC" and "CDE". The search() method does not support "g" flag (global matching), it only returns the position of the first match string.

2) replace(). It allows the use of "i" and "g":

//example for replace()
var str="Hello World! Hello CodeWars!"
console.log( str.replace(/world/,"javascript") )  
//output: Hello World! Hello CodeWars!   
//(There is no match to the string, so nothing is replaced.)

console.log( str.replace(/world/i,"Javascript") )  
//output: Hello Javascript! Hello CodeWars!   
//(Using "i" flag to match "World" and replace it by "Javascript")

console.log( str.replace(/Hello/g,"I love") )  
//output: I love World! I love CodeWars!   
//(Using "g" flag to match two "Hello" and replace it by "I love")
3) split(). It uses the "g" option by default, regardless of whether you specify it or not.

//example for split()
var str="ababaBa"
console.log( str.split(/b/) )   //output: [ 'a', 'a', 'aBa' ]
console.log( str.split(/b/g) )  //output: [ 'a', 'a', 'aBa' ]
console.log( str.split(/b/i) )  //output: [ 'a', 'a', 'a', 'a' ]
4) match(). We have not learned this method before, because its parameter is a regular expression. Its result is an array that includes the matching results of regular expressions. We mainly use this method in the example to demonstrate the effect of regular expressions. See an example:

//example for match()
var str="ABABCDEababcde";
console.log(str.match(/a/))  //output: [ 'a', index: 7, input: 'ABABCDEababcde' ]
console.log(str.match(/a/i)) //output: [ 'A', index: 0, input: 'ABABCDEababcde' ]
console.log(str.match(/a/ig))//output: [ 'A', 'A', 'a', 'a' ]
console.log(str.match(/ab/)) //output: [ 'ab', index: 7, input: 'ABABCDEababcde' ]
console.log(str.match(/ab/i))//output: [ 'AB', index: 0, input: 'ABABCDEababcde' ]
console.log(str.match(/ab/ig))//output: [ 'AB', 'AB', 'ab', 'ab' ]
console.log(str.match(/xyz/)) //output: null
We can see: When the matching result is more than one, the output is an array of strings that contain all the matching results; When the matching result is one, the output is a list containing the matching string, the matching index and the original string. If there is no match result, the output is null.

We often use match() or replace() or split() to count the number of characters in a string:

//example for match()
function count1(str,char){
  return str.match(new RegExp(char,"g")).length
}
function count2(str,char){
  return str.length-str.replace(new RegExp(char,"g"),"").length;
}
function count3(str,char){
  return str.split(char).length-1;
}
console.log(count1("aaaaa","a"))  //output: 5
console.log(count2("aaaaa","a"))  //output: 5
console.log(count3("aaaaa","a"))  //output: 5
console.log(count1("aaaaa","b"))  
//output: TypeError: Cannot read property 'length' of null
console.log(count2("aaaaa","b"))  //output: 0
console.log(count3("aaaaa","b"))  //output: 0
The three methods can achieve the same effect. We note that in the second time using match(), we got a "TypeError". Because the match() does not match to the string, its result is null, null does not have the length attribute. We can change it this way:

//example for match()
function count1(str,char){
  return (str.match(new RegExp(char,"g"))||[]).length
}
console.log(count1("aaaaa","a"))  //output: 5
console.log(count1("aaaaa","b"))  //output: 0
This will avoid the errors.

Ok, lesson is over. let's us do some task.

#Task
Coding in function ```countAnimals```. function accept two parameters: ```animals```, a string contains some animals; ```count```, an array list of which animals we should count. The result should be a number array.

Some examples:
```
countAnimals("dog,cat",["dog","cat"]) should return [1,1]
countAnimals("dog,cat",["dog","cat","pig"]) should return [1,1,0]
countAnimals("dog,dog,cat",["dog","cat"]) should return [2,1]
countAnimals("dog,dog,cat",["pig","cow"]) should return [0,0]
```
*/
function countAnimals(animals, count) {
  let res = [];
  for (let i = 0; i < count.length; i++)
    res.push(animals.split(count[i]).length - 1);
  return res;
}
