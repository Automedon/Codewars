/*
Training JS #20:
Methods of String object--charAt() charCodeAt() and fromCharCode()

This time we learn three string methods used to single character operation :charAt() charCodeAt() and fromCharCode(). Their usage:

stringObject.charAt(index)
stringObject.charCodeAt(index)
String.fromCharCode(num1,num2,...,numX)
charAt() method can return to the specified location of the character. like this:

var str="abcde";
console.log(str.charAt(0));
console.log(str.charAt(1));
//output:
a
b
In practical use, the charAt() method is usually replaced by str[index]. Because it is more convenient:

var str="abcde";
console.log(str[0]);
console.log(str[1]);
//output:
a
b
charCodeAt() method can return the specified location of the character of the Unicode encoding. This return value is an integer between 0 and 65535.

Method charCodeAt() and charAt() operation is similar, but the former is returned to the specified location of the character encoding, and the latter is returned to the character string.

Unicode is a computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems.This is the reference information of unicode.

This example will display the character value and unicode value of each characters in str:

var str="abcde";
for (var i=0;i<str.length;i++){
  console.log(str.charAt(i),str.charCodeAt(i));
}

//output:
a 97
b 98
c 99
d 100
e 101
If parameter index of charCodeAt() is omitted, its returned value will be the first character of stringObject. So the parameter can be omitted when the string length is 1; in other cases, you can't omit the parameter, unless you want to get the first character. An example of omitted parameter:

var chars="abcde".split("");
for (var i=0;i<chars.length;i++){
  var tmp=chars[i].charCodeAt();
  if (tmp==97) console.log("a for apple");
  else console.log(tmp);
}

//output:
a for apple
98
99
100
101
fromCharCode() can accept one or more specified Unicode values, and then return a string. The method is a static method of String. It cannot be used as a method of the String object you have created. So its syntax should be String.fromCharCode() instead of stringObject.fromCharCode(). See example:

var chars=[];
for (var i=97;i<123;i++){
  chars.push(String.fromCharCode(i));
}
console.log(chars.join(""))
//output:
abcdefghijklmnopqrstuvwxyz
This code uses fromCharCode() to create a string from a to z.

When fromCharCode() has only one parameter, it is very much like the reverse operation of charCodeAt(). they are a pair of good partners. We often see them in the kata about the shift encryption. See an example:

function decode(str){
  var chars=str.split("");
  for (var i=0;i<chars.length;i++) 
    chars[i]=String.fromCharCode(chars[i].charCodeAt()-1);
  return chars.join("");
}
function encode(str){
  var chars=str.split("");
  for (var i=0;i<chars.length;i++) 
    chars[i]=String.fromCharCode(chars[i].charCodeAt()+1);
  return chars.join("");
}
var s="abcde"
s=encode(s);
console.log("encode:",s)    //encryption s
s=decode(s);
console.log("decode:",s)    //decryption s
//output:
encode: bcdef
decode: abcde
This is a simple example of the shift of encryption, encryption to the right (Unicode value becomes large) shift 1. The decryption and encryption on the contrary.

Ok, lesson is over. let's us do some task.

#Task
Coding in function ```topSecret```, function accept 1 parameter:```file```. ```file``` is an encrypted string.

Encryption using the right shift 3. Your job is to decrypt the file and read the contents of the file, and then answer my three questions. If the answer is correct, you will pass the test.
Note: the decryption should be left shift; Shift is only for uppercase and lowercase letters, other characters will remain the same; The shift mode is a cyclic shift, for example:
```
character "A" after decryption should be "X" instead of ">"
character "B" after decryption should be "Y" instead of "?"
character "C" after decryption should be "Z" instead of "@"
character "a" after decryption should be "x" instead of "^"
character "b" after decryption should be "y" instead of "_"
character "c" after decryption should be "z" instead of "`"
```
Additional hints: Fixed testcase only test the correctness of the decryption code. The answer to the three question will appear only after clicking on "Submit".

This task may be more difficult for beginners. Good Luck!

Some trainer may have doubts about the three questions, the following is some explanation, I hope to be helpful to the trainer.

for example, after you click "submit", you see these text on your screen:
Top secret files: No. 3330
Super agent eEB, on a dark night, stole the Apple core from National Museum, causing $100 million in damage.
and then:

question 1 should answer:"3330"
question 2 should answer:"eEB"
question 3 should answer:"Apple core"
if you haven't seen something like the text above, perhaps your decryption code is not correct ;-)

Although the text is not the same every time, the next time may appear:

Top secret files: No. 2135
Super agent ZIUScE, on a dark night, stole the Lolli pop from National Museum, causing $100 million in damage.
You only need to choose one of the text as the answer to the question. That is to say, any one of them is the correct answer.
*/
function topSecret(str){
  let dict = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p',
'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y','z'];
 let Dict = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P',
'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y','Z'];
  return str.replace(/[a-z]/gi,v=>{
  if (v===v.toLowerCase()){
  return dict.indexOf(v.toLowerCase())-3<0?
  dict[dict.indexOf(v.toLowerCase())-3+26]
 :dict[dict.indexOf(v.toLowerCase())-3]}
 if (v===v.toUpperCase()){
  return Dict.indexOf(v)-3<0?
  Dict[Dict.indexOf(v)-3+26]
 :Dict[Dict.indexOf(v)-3]}
 return v}
 );
 
}
//question1: The top secret file number is...
const answer1="3745";
//question2: Super agent's name is...
const answer2="RILc";
//question3: He stole the treasure is...
const answer3="Expired biscuits";
