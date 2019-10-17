/*
Description:
It has to return the sum of all numbers passed as arguments (however many are provided). If no numbers are provided as arguments it must return 0. If 1 number is provided as an argument that number must be returned. If anything other than a number is provided as one or more of the arguments, it must be ignored. Example:

sumNumbers()             // 0
sumNumbers(1, 2)         // 3
sumNumbers(4, 5, '6')    // 9
*/
function sumNumbers() {
 return [...arguments].reduce((a,b)=>a+(typeof b==='number'?b:0),0)
}
