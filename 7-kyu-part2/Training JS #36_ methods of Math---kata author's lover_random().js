/*
Description:
Training JS #36:
methods of Math---kata author's lover:random()

Maybe you don't often use random() when you're dealing with Kata, but every qualified Kata can not be missing random(). Because random testcase is the most basic anti cheating measure. A variety of testcases also help authors identify potential problems. If you also want to create a new Kata and become an author, please follow me to learn about random().

The definitions and detailed information:

random()
Let's learn the usage of random() through examples:

random() does not require any parameters, and its return value is a decimal between 0 and 1:

for (var i=0;i<5;i++) console.log(Math.random());
//output:
0.9319351236335933
0.5403203193563968
0.006271821213886142
0.6078395291697234
0.4499389610718936
But we usually want to generate some integers, we can do so:

for (var i=0;i<5;i++) console.log(  ~~(100*Math.random()) );
//output:
19
38
69
85
0
A number multiply with random(), and then use the Math.floor(~~ is a simplified form of math.floor) to get an integer. The range is 0 to number-1.

If we do not want to start from 0, but need a specific range, you can write a function do this:

function rndnum(from,to){
  return ~~((to-from)*Math.random()+from);
}
for (var i=0;i<5;i++) console.log(rndnum(20,30));
//output:
20
23
24
24
22
If we want to generate random characters, we can do this:

for (var i=0;i<5;i++) 
  console.log(String.fromCharCode(~~(127*Math.random())));
//output:
<


#
)
We generated a ASCII character. You tell me second and third characters are not generated successfully? No, they're whitespace. If you only want to generate some lowercase letters, you can do this:

for (var i=0;i<5;i++) 
  console.log(String.fromCharCode(~~(26*Math.random()+97)));
//output:
m
p
a
u
r
What should we do if we want to get a character from some of the characters that do not have a regular character? For example, we want to randomly generate a character from aeiou, we can do this:

var chars="aeiou";
for (var i=0;i<5;i++) 
  console.log(chars[~~(chars.length*Math.random())]);
//output:
u
e
i
o
u
If we want to randomly generate some fixed words, we can use arrays to do:

var names=["John","Tom","Jerry","Minne","Alice","othername..."];
for (var i=0;i<5;i++) 
  console.log(names[~~(names.length*Math.random())]);
//output:
Minne
Alice
Jerry
Minne
othername...
Ok, lesson is over. let's us do some task.

#Task
Coding in function ```rndCode```. Your task is to generate a random verification code. In accordance with the following rules:

1) the code length should be 8;

2) The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

3) The 3rd-6th characters should be four numbers.

4) the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

5) If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:
```
AB1234#$ MG6145$@ KJ2249@&
CD5678%^ IG7593~% FH8638@&
EF9012!@ GB7047%$ KD7604^%
*/
function rndCode(){
  let dict1="ABCDEFGHIJKLM"
  let dict2 = '0123456789'
  let dict3 = "~!@#$%^&*"
  let str=''
  for (let i=1; i<=8;i++){
    if (i===1||i===2){str+=dict1[~~(dict1.length*Math.random())]}
    if (i>2&&i<7){str+=dict2[~~(dict2.length*Math.random())]}
    if (i>6){str+=dict3[~~(dict3.length*Math.random())]}
  }
  return str
}
