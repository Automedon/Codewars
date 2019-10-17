/*
Description:
Your task is to write a function 'anArgument' that doesn't have a fixed number of parameters. The function should count the arguments passed to it and return a string that specifies how many arguments were passed in, and states what they were.

If the function call is

anArgument("pigs", "giraffes", "unicorns");
The returned string should say

'You gave me 3 arguments and they are "pigs", "giraffes" and "unicorns".'
If there is only one argument passed in, the string should say

'You gave me 1 argument and it is "pigs".'
If there are two arguments, the string should say

'You gave me 2 arguments and they are "pigs" and "giraffes".'
If there are no arguments, the string should say

'You didn't give me any arguments.'
###Punctuation and grammar notes

There are commas after each argument except the last and second-last, which are separated with 'and'
Arguments are presented in quotation marks
The singular: '1 argument' as opposed to multiples: '3 arguments'
Verb agreement: 'and it is' as opposed to 'and they are'
*/
function anArgument() {
  let arg=[...arguments]
  if (arg.length===0){
    return `You didn't give me any arguments.`
  }
  if (arg.length===1){
    return `You gave me 1 argument and it is "${arg[0]}".`
  }
  if (arg.length===2){
    return `You gave me 2 arguments and they are "${arg[0]}" and "${arg[1]}".`
  }
  let str = '';
  for (let i=0;i<arg.length;i++){
   if (i<arg.length-2){
     str+=`"${arg[i]}", `
   }   
   if (i===arg.length-2){
     str+=`"${arg[i]}" `
   } 
   if (i===arg.length-1){
     str+=`and "${arg[i]}".`
   } 
  }
  return `You gave me ${arg.length} arguments and they are ${str}`
}
