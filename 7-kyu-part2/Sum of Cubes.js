/*
Description:
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples:

sumCubes(2) // 9
// sum of the cubes of 1 and 2 is 1 + 8
*/
function sumCubes(n){
   return Array.from({length:n},(_,i)=>(i+1)*(i+1)*(i+1)).reduce((a,b)=>a+b,0)
}
