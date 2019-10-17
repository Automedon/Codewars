/*
Description:
You know Array.isArray was already implement in ECMAScript 5.1 (ECMA-262). So this will be the polyfill.

Use Array.isArray to define method.

For example:

Array.isArray( [1,2,3] );  // true
Array.isArray( new Array() ); // true

Array.isArray( undefined ); // false
Array.isArray(17); // false
*/
Array.isArray = function(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};
