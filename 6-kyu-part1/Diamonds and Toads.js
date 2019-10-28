/*
Description:
Base on the fairy tale Diamonds and Toads from Charles Perrault. In this kata you will have to complete a function that take 2 arguments:

A string, that correspond to what the daugther says.
A string, that tell you wich fairy the girl have met, this one can be good or evil.
The function should return the following count as a hash:

If the girl have met the good fairy:
count 1 ruby everytime you see a r and 2 everytime you see a R
count 1 crystal everytime you see a c and 2 everytime you see a C
If the girl have met the evil fairy:
count 1 python everytime you see a p and 2 everytime uou see a P
count 1 squirrel everytime you see a s and 2 everytime you see a S
Note: For this kata I decided to remplace the normal Diamonds and Toads by some programming languages. And just discover that Squirrel is a programming language.
*/
function diamondsAndToads(sentence,fairy){
  if (fairy==='good'){
    let obj = {ruby:0,crystal:0}
    sentence.split``.map(v=>v==='r'?obj.ruby++:v==='R'?obj.ruby+=2:v==='c'?obj.crystal++:v==='C'?obj.crystal+=2:v)
    return obj
  }
  if (fairy==='evil'){
    let obj = {python:0,squirrel:0}
    sentence.split``.map(v=>v==='p'?obj.python++:v==='P'?obj.python+=2:v==='s'?obj.squirrel++:v==='S'?obj.squirrel+=2:v)
    return obj
  }
}
