/*
Description:
This kata should be able to take an array of numbers, square each item, filter out odd numbers, and return the remaining even numbers sum. if Array contains an element which is not number return undefined.
*/
const fSquared=(arr)=>arr.every(v=>Number.isFinite(v)) ? arr.filter(v=>(v*v)%2===0).reduce((a,b)=>a+b*b,0):undefined
