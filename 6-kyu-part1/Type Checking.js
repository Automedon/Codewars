/*
Description:
Create the function type which takes the argument val and returns val's type as a string. If possible, type should return additional information. Instead of a wall of text, here are code examples:

type(undefined) --> 'Undefined'
type(null) --> 'Null'
type(true) --> 'Boolean'
type(function(){}) --> 'Function'
type(Math.max) --> 'Function'
type('abc') --> 'String'
type({snap: "crackle"}) --> 'Object'

//Numbers should include additional information
type(1) --> 'Number Integer'
type(1.1) --> 'Number Float'
type(NaN) --> 'Number NaN'
type(-Infinity) --> 'Number Infinite'

//If a string is numeric-formatted:
type('123')
type('123.321')
type('0xF')
  --> All return 'String Numeric'

//For constructed objects, return the name of the constructor
type(/abc/) --> 'RegExp'
type([1,2,3]) --> 'Array'
function Custom(){}
type(new Custom()) --> 'Custom'
Related reading: MDN's page for Object.prototype.toString and Object.prototype.constructor.
*/
function type(val) {
  if (val===undefined) return "Undefined"
  if (val===null) return "Null"
  if (typeof val === 'boolean') return "Boolean"
  if (typeof val === 'function') return "Function"
  if (typeof val === 'number' && parseInt(val)===val) return 'Number Integer'
  if (Number.POSITIVE_INFINITY===val||Number.NEGATIVE_INFINITY===val) return 'Number Infinite'
  if (typeof val === 'number' && parseFloat(val)===val) return 'Number Float'
  if (typeof val === 'number' && isNaN(val)) return 'Number NaN'
  if (val.constructor===Array) return "Array"
  if (val.constructor===RegExp) return "RegExp"
  if (typeof val === 'string' && !isNaN(parseInt(val))) return "String Numeric"
  return  (val.constructor+'').match(/function (.+)\(/)[1]
}
