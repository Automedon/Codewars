/*
Description:
Your distributeEvenly function will take an array as an argument and needs to return a new array with the values distributed evenly.

Example:

Argument: ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four']

Result: ['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']

The underlying order will stay the same as in the original array. So in the case of our argument above, one comes before two so it stays this way in the returned array.

The aim is to have the longest possible chain of evenly distributed values (from the left to right), this means that an argument with many of the same elements might have many which are repeated at the end.

Example:

Argument: ['one', 'one', 'one', 'one', 'one', 'two', 'three']

Result: [ 'one', 'two', 'three', 'one', 'one', 'one', 'one' ]
*/

const distributeEvenly = array => {
  const uniqueTypes = [...new Set(array)];
  const arrayOfTypes = uniqueTypes.map(outer =>
    array.filter(inner => outer === inner)
  );

  return array
    .map((item, i) => arrayOfTypes.map(el => el[i]))
    .reduce((a, b) => a.concat(b))
    .filter(_ => _);
};
