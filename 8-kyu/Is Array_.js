/*
Description:
Create a function that returns if the variable is an array, i.e.

isArray([]) => true
isArray({}) => false
isArray('lero') => false
isArray('') => false
isArray([0]) => true
*/
function isArray(value) {
  return Array.isArray(value);
}
