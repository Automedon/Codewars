/*
Description:
#Adding values of arrays in a shifted way

You have to write a method, that gets two parameter:

1. An array of arrays with int-numbers
2. The shifting value
#The method should add the values of the arrays to one new array.

The arrays in the array will all have the same size and this size will always be greater than 0.
The shifting value is always a value from 0 up to the size of the arrays.
There are always arrays in the array, so you do not need to check for null or empty.

#1. Example:

[[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0

1,2,3,4,5,6
7,7,7,7,7,-7

--> [8,9,10,11,12,-1]
#2. Example

[[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

1,2,3,4,5,6
      7,7,7,7,7,7

--> [1,2,3,11,12,13,7,7,7]
#3. Example

[[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3


1,2,3,4,5,6
      7,7,7,-7,7,7
            1,1,1,1,1,1

--> [1,2,3,11,12,13,-6,8,8,1,1,1]
Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/
function addingShifted(arrayOfArrays, shift) {
  var result = [];
  var endArrayLength =
    arrayOfArrays[0].length + shift * (arrayOfArrays.length - 1);
  for (var i = 0; i < endArrayLength; i++) {
    result.push(0);
  }

  for (var i = 0; i < arrayOfArrays.length; i++) {
    for (var j = 0; j < arrayOfArrays[i].length; j++) {
      result[j + shift * i] += arrayOfArrays[i][j];
    }
  }

  return result;
}
