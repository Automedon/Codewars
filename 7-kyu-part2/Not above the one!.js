/*
Description:
Write an algorithm to remove all the numbers above 1 from the given array.

Just in case we want to make any changes, create an array of the indexes of the removed numbers.

Return a nested array:

the first array being only the 1's and 0's
the second array being the index of the removed numbers
[0,1,2,1,5,6,2,1,1,0]
should return

[[ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ]]
Please upvote and enjoy!
*/
function binaryCleaner(arr) {
  let arr2 = [];
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 1) {
      arr2.push(i);
    } else arr1.push(arr[i]);
  }
  return [arr1, arr2];
}
