/*
Description:
Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array/list/vector of integers and the expected number n of smallest elements to return.

Also:

the number of elements to be returned cannot be higher than the array/list/vector length;
elements can be duplicated;
in case of duplicates, just return them according to the original order (see third example for more clarity).
Same examples and more in the test cases:

firstNSmallest([1,2,3,4,5],3) === [1,2,3] //well, not technically ===, but you get what I mean
firstNSmallest([5,4,3,2,1],3) === [3,2,1]
firstNSmallest([1,2,3,4,1],3) === [1,2,1]
firstNSmallest([1,2,3,-4,0],3) === [1,-4,0]
firstNSmallest([1,2,3,4,5],0) === []
Performance version by FArekkusu also available.
*/
function firstNSmallest(array, n){
  const result = [];
  const arrSorted = array.slice().sort((a, b) => a - b).slice(0, n);
  for (let i = 0; i < array.length; i++) {
    if (arrSorted.includes(array[i])) {
      result.push(...arrSorted.splice(arrSorted.indexOf(array[i]), 1));
    }
  }
  return result;
}
