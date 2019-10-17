/*
Description:
Array.prototype.sort() is a pretty handy feature of the JS core, but when it comes to order an array of numbers, sometimes it can pollute our code.

In this Kata you have to extend the Array object and add the sortReloaded(dir) method to it in order to make this task easier and cleaner.

It should receive a dir parameter which has with two possible values 'asc' or 'desc', and return a new array ordered ascendingly or descendingly respectively. If no dir parameter is set it should assume 'asc' by default. If it has an invalid value, return false.

For the effects of this Kata, all the arrays will contain only Integer numbers so you don't have to care about validating them.
*/
Array.prototype.sortReloaded=function(asc='asc'){
  if (asc==='asc') return this.slice().sort((a,b)=>a-b)
  if (asc==='desc') return this.slice().sort((a,b)=>b-a)
  return false
}
