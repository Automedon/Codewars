/*
Description:
shortest code: Bug in Apple
(Code length limit: 80 chars)

This is the challenge version of coding 3min series. If you feel difficult, please complete the simple version

#Task:
Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array ```apple```

output: Location of "B", ```[x,y]```
#Code length calculation
In javascript, we can't get the user's real code, we can only get the system compiled code. Code length calculation is based the compiled code.

For example: 

If you typed ```sc=x=>x+1```  
after compile, it will be:```sc=function(x){return x+1;}```   
*/
sc=(a)=>{i=a.findIndex(v=>v.includes('B'));return [i,a[i].indexOf('B')]}
