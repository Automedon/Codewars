/*
Description:
Reimplement Array.prototype.forEach in a standalone _forEach(array, fn) function.

The second argument is a function with the following signature:

function(current, index, array) {}
// We keep array as 3rd argument because it exists in the official signature
Avoid using the existing Array.prototype.forEach
array may be null, undefined, or empty; _forEach should return undefined and not throw error in these cases
Example:

_forEach(['hello', 'code', 'wars'], function(current, index, array) {
  console.log(current + ' is at index ' + index + ' in ' + array)
})

// This will output in console:
// hello is at index 0 in hello,code,wars
// code is at index 1 in hello,code,wars
// wars is at index 2 in hello,code,wars
*/
function _forEach(array, fn) {
    if (!Array.isArray(array)||array.length===0) return undefined
    return array.map((v,i,arr)=>fn(v,i,arr))
}
