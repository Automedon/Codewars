/*
Description:
Your math teacher keeps giving you long lists of numbers (meaning integers AND floats), and expects you to find the Maximum (max), Minimum (min), Median (med) and Mean!

How are you supposed to do that? That's way too much work!

Like any good programmer, you only like to do things once, so create function list_mix() to do it for you!

list_mix() will take an input in the form of a list of numbers, and output the max, min, med, and mean in that order!

Note: The list will only have valid types, so no need for error checking, and if the list has an even amount of numbers, return the average of the two numbers in the middle.

All floats should be rounded to two decimal places.

Here are a few examples to help clarify:

list_mix([1, 5, 4, 3, 2]) == [5, 1, 3, 3] #max, min, med, mean
list_mix([1]) == [1, 1, 1, 1]
list_mix([-12, 2, 1.2, 20]) == [20, -12, 1.6, 2.8]
*/
function listMix(arr){
  arr=arr.sort((a,b)=>a-b)
  let med =0;
  if (arr.length%2!==0) med=arr.slice(0,arr.length/2+1).reverse()[0]
  else med = (arr.slice(arr.length/2)[0]+arr.slice(0,arr.length/2).reverse()[0])/2
  return [Math.max(...arr),Math.min(...arr),med.toFixed(2)*1,(arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(2)*1]
}
