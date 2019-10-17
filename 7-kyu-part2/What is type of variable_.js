/*
Create a function to return true type of variable, i.e.

type([]) => 'array'
type({}) => 'object'
type('') => 'string'
type(NaN) => 'number'
*/
function type(value) {
  if (value instanceof Array) return 'array'
  if (value instanceof Date) return 'date'
  if (value === null) return 'null'
  if (value instanceof Object) return 'object'
  return typeof value
}
