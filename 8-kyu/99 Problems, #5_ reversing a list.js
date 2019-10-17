/*
Description:
Write a function that reverses a list, without using any built-in reverse functions.

JS : Array#reverse has been modified.
*/
const rev = xs => {
  const arr=[];
  xs.map(v=>arr.unshift(v))
  return arr
}
