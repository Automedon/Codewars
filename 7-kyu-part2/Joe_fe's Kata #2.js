/*
Description:
This function should flatten a nested array.

Example:
flatten([1, [[2], 3, 4], 5]) // => [1, 2, 3, 4, 5]
Note:
eval and require are disabled.
*/
flatten = a =>
  a.reduce((r, e) => r.concat(Array.isArray(e) ? flatten(e) : e), []);
