/*
Description:
Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

Examples:

range(5) --> 1,2,3,4,5
range(3, 7) --> 3,4,5,6,7
range(2, 3, 15) --> 2,5,8,11,14
*/
function range(a,b,c){
  if (a&&b&&c){
    return Array.from({length:c/b},(v,i)=>a+i*b)
  } else if (a&&b){
    return Array.from({length:b-a+1},(v,i)=>i+a)
  } else {
    return Array.from({length:a},(v,i)=>i+1)
  }
}
