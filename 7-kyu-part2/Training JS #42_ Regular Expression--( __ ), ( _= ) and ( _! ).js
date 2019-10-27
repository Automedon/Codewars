/*
Description:
Training JS #41:
Regular Expression--(?:), (?=) and (?!)

In this lesson, we learn about: (?:), (?=) and (?!). There is not much content in this lesson, but it is not easy to understand.

Use (?:) to define a sub expression that is not used for the backreference, this is the difference between it and common sub expressions. See an example:

var str="aab abb aba"
var re1=/\b(a)(\w)\1\b/g
var re2=/\b(?:a)(\w)\1\b/g
console.log( str.match(re1) )  //output: [ 'aba' ]
console.log( str.match(re2) )  //output: [ 'abb' ]
We can see that \1 in re1 is backreference from (a), and \1 in re2 is backreference from (\w). It tells the compiler that the sub expression does not need to be saved, which helps to reduce the operation of the code. Look at another example:

var str="dogs cats sheeps car bar star"
var re1=/\b\w+(?:s|ar)\b/g
var re2=/\b\w+(?:s|ar)\b/
var re3=/\b\w+(s|ar)\b/
console.log( str.match(re1) )  
//output: [ 'dogs', 'cats', 'sheeps', 'car', 'bar', 'star' ]
console.log( str.match(re2) )  
//output: [ 'dogs', index: 0, input: 'dogs cats sheeps car bar star' ]
console.log( str.match(re3) )  
//output: [ 'dogs', 's', index: 0, input: 'dogs cats sheeps car bar star' ]
In the example above, if the g option is used, it will match 6 strings. re2 and re3 do not use the g option, and we can see the details of the first match: re3 saved a "s", while re2 did not save. This means that if two expressions are using the g option, the expression that did not uses (?:) will save more than 6 strings.

That is, if you don't need a backreference, use (?:) will make your code faster.

(?=) and (?!) belong to the assertion statement of regular expressions. In fact, regular expressions has four kinds of assertion statements: Lookahead Positive Assertion, Lookahead Negative Assertion, Lookbehind Positive Assertion, Lookbehind Negative Assertion. Unfortunately, only two kinds in the JS. (?=) is the Positive Assertion, and (?!) is the Negative Assertion. They are the opposite. They can be placed in the front or back of the regular expression, which indicates "Lookahead" or "Lookbehind".

If they are placed in the front of the regular expression, means "the match string should start with.." or "should not start with..". See a simple example:

var str="javascript coffeescript vbscript javacode"
var re1=/\b\w+script\b/g
var re2=/(?=java)\b\w+script\b/g
var re3=/(?!java)\b\w+script\b/g
console.log( str.match(re1))  //output: [ 'javascript', 'coffeescript',  'vbscript' ]
console.log( str.match(re2))  //output: [ 'javascript' ]
console.log( str.match(re3))  //output: [ 'coffeescript', 'vbscript' ]
In the example above, re1 is an ordinary regular expression that matches all the strings that are end with "script". re2 add a Positive Assertion in front of re1, like a filter statement, equivalent to: str.match(re1).filter(x=>/^java/.test(x)") ; re3 add a Negative Assertion in front of re1, equivalent to: str.match(re1).filter(x=>!/^java/.test(x)).

It should be noted that the assertion itself is not captured, it is only a "condition", some people call it "zero width assertion".

If they are placed in the back of a regular expression, it does not means "should end with..." or "should not end with...", it means "... must appear in the back of the match string" or "... should not appear in the back of the match string". Let's see example:

var str="dog,cat,pig,cow"
var re1=/\b\w+\b/g
var re2=/\b\w+\b(?=,cat|,pig)/g   
var re3=/\b\w+\b(?!,cat|,pig)/g
var re4=/(?=c)\b\w+\b(?!,cat|,pig)/g  
console.log( str.match(re1))  //output: [ 'dog', 'cat', 'pig', 'cow' ]
console.log( str.match(re2))  //output: [ 'dog', 'cat' ]
console.log( str.match(re3))  //output: [ 'pig', 'cow' ]
console.log( str.match(re4))  //output: [ 'cow' ]
Why do the same expressions have different meanings in different postions? In fact, the statement above is not the "truth". Let us reveal the truth:

(?=) and (?!) are matches a postion with zero width, their true meaning should be "from this postion to the right should be ..." and "from this postion to the right should not be ...". Let's look at the example above where they match the postion:

var str="javascript coffeescript vbscript javacode"
var re2=/(?=java)\b\w+script\b/g
//they match these postion:
zjavascript zcoffeescript zvbscript zjavacode
^           ^             ^         ^
z means a "zero with", If "java" on the right of 
these postion should match success.

var str="dog,cat,pig,cow"
var re2=/\b\w+\b(?=,cat|,pig)/g   

dogz,catz,pigz,cowz
   ^    ^    ^    ^
If ",cat" or ",pig" on the right of these postion should match success.
Finally, we look at a classic example, add commas to the "money", such as convert "$123456789" to "$123,456,789":

function addCommas(money){
  var re=/\d{3}/g
  return money.replace(re,x=>x+",")
}
console.log( addCommas("$123456789") ) //output: $123,456,789,
Looks very strange, there should be no comma at the end. It looks like the code needs to be improved:

function addCommas(money){
  var re=/\d{3}(?!$)/g
  return money.replace(re,x=>x+",")
}
console.log( addCommas("$123456789") ) //output: $123,456,789
Okay, now it looks normal. But let's do some tests:

function addCommas(money){
  var re=/\d{3}(?!$)/g
  return money.replace(re,x=>x+",")
}
console.log( addCommas("$123456789") )  //output: $123,456,789
console.log( addCommas("$123456") )     //output: $123,456
console.log( addCommas("$1234567890") ) //output: $123,456,789,0
console.log( addCommas("$1234567") )    //output: $123,456,7
Oh, NO~~ This is not the result we want. Function returns the correct result only when the number length is a multiple of 3. It seems that we need to change ideas.

I am a bit tired, so this is your task of this kata: help me to complete this function.

#Task
Your task is coding in function ```addCommas```. Function accepts 2 parameters: ```money``` and ```reg```. ```money``` is a string, it only contains "$" and numbers. To avoid someone being lazy, so you should defined a regular expression outside function, its name should be ```regex```. It will passed to the function as parameter reg. You can write code that uses this regular expression in the function, such as using ```replace()``` or other methods.

Some examples:
```
addCommas("$123",regex) should return "$123"
addCommas("$1234",regex) should return "$1,234"
addCommas("$12345",regex) should return "$12,345"
addCommas("$1234567",regex) should return "$1,234,567"
addCommas("$123456789",regex) should return "$123,456,789"
```
*/
var regex = /(\d)(?=(\d{3})+$)/g;
function addCommas(money, reg) {
  return money.replace(reg, x => x + ",");
}
