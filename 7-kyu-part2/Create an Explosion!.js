/*
Description:
Create a BOOOOOM!

Given a number, return a string of the word "Boom", which varies in the following ways:

The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").

If n is evenly divisible by 2, add an exclamation mark to the end.

If n is evenly divisible by 5, return the string in ALL CAPS.

If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

(return 'boom' in all other cases)

Accridation to Er0S - first seen on Edabit https://edabit.com/challenge/XnZAcvr4tCD9ppyrN


boomIntensity(1) returns 'boom'

boomIntensity(5) returns 'BOOOOOM'

boomIntensity(10) returns 'BOOOOOOOOOOM!
or in python ...


boom_intensity(1) returns 'boom'

boom_intensity(5) returns 'BOOOOOM'

boom_intensity(10) returns 'BOOOOOOOOOOM!
*/

function boomIntensity(n) {
  if(n<2){
    return 'boom'
  }
  let str = `B${`o`.repeat(n)}m`
  if(n%2===0&&n%5===0){
    return str.toUpperCase()+`!`
  }
   if(n%2===0){
    return str+`!`
  }
   if(n%5===0){
    return str.toUpperCase()
  }
  return str
}
