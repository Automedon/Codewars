/*
Description:
In this kata you are given an array to sort but you're expected to start sorting from a specific position of the array (in ascending order) and optionally you're given the number of items to sort.

Examples:
sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2) //=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5) //=> [9, 7, 1, 2, 3, 4, 5, 8, 6]
Documentation:
sectSort(array, start, length);
array - array to sort
start - position to begin sorting
length - number of items to sort (optional)
if the length argument is not passed or is zero, you sort all items to the right of the start postiton in the array
*/


function sectSort(arr,s,f) {
  f===0?f=undefined:f;
  const before=arr.slice(0,s);
  const center=arr.slice(s,(s+f)||arr.length).sort((a,b)=>a-b);
  let end 
  f===undefined? end=arr.slice(s,s):end=arr.slice(s+f);
  return [...before,...center,...end];
}
