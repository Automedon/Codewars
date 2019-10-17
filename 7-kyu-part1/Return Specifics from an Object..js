/*
Description:
Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

array should return numbers first then all the method names in the order they are in the object
strings, booleans, arrays should be ignored.
if the object is empty, then the array should return the following string: The Object is Empty
Example:

returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
This would return [1,2,3,'e']
*/

const returnSpecifics = o => {
  let [N,F] = [[],[]]
  for(let k in o){
    if (typeof o[k] === 'number' ) N.push(o[k])
    if (typeof o[k] === 'function') F.push(k)
  }
  return N.length<1 && F.length<1 ?  ['The Object is Empty'] : [...N, ...F]
}
