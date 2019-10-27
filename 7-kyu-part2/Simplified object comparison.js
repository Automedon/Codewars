/*
Description:
This is a simplified version of Deep comparison of objects.

It's not easy to compare objects in JavaScript. Even two objects with the same properties and values will be considered different.

{a: 1, b: 2} === {a: 1, b: 2}
// false
Your task is to create a function, compareObjects(objectA, objectB), which compares 2 objects. The parameters will always be objects, and will not contain other objects or arrays, just strings and numbers. It will return true if the objects are the same, and false if they are not.

If both objects have the same values in a different order, they are considered the same. e.g.

compareObjects({a: "bc", d: "ef"}, {d: "ef", a: "bc"})
// true
NB: The JSON.stringify method is invalid.
*/
var compareObjects = function(objectA, objectB) {
  if (Object.keys(objectA).length !== Object.keys(objectB).length) return false;
  for (let i in objectA) {
    if (objectA[i] !== objectB[i]) return false;
  }
  return true;
};
