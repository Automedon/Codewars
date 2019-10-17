/*
Description:
Extend the Array prototype/class with a function to return all elements of that array, except the ones with the indexes passed in the parameter.

The function should accept either an array or a single integer as parameters, like this:

var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except([1,3]);
// array2 should contain ['a', 'c', 'e']
or

var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except(1);
// array2 should contain ['a', 'c', 'd', 'e']
*/
Array.prototype.except = function(...keys)
{
  keys=[].concat(...keys)
  return this.filter((v,i)=>keys.find(v=>v===i)===undefined)
}
