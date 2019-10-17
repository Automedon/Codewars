/*
The objective of this kata is to take a given array and replace an element within it with the first element of a second array at the index of the number given as the second element of the second array. For example:

[4,2,7,5][2,3] should return [4,2,7,2] i.e. 2 the first element of the second array was placed at index 3 of the first array

The second array will only contain 2 elements. If the second element of the second array i.e the index to move to does not exist return the first array unchanged
*/
function elShuffle(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (i === arr2[1]) arr1[i] = arr2[0];
  }
  return arr1;
}
