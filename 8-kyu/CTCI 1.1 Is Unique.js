/*
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/
const isUnique = str => {
  return str.length===[...new Set(str)].length
}
