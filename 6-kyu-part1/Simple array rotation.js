/*
Description:
In this Kata, you will be given an array and your task will be to determine if an array is in ascending or descending order and if it is rotated or not.

Consider the array [1,2,3,4,5,7,12]. This array is sorted in Ascending order. If we rotate this array once to the left, we get [12,1,2,3,4,5,7] and twice-rotated we get [7,12,1,2,3,4,5]. These two rotated arrays are in Rotated Ascending order.

Similarly, the array [9,6,5,3,1] is in Descending order, but we can rotate it to get an array in Rotated Descending order: [1,9,6,5,3] or [3,1,9,6,5] etc.

Arrays will never be unsorted, except for those that are rotated as shown above. Arrays will always have an answer, as shown in the examples below.

More examples:

solve([1,2,3,4,5,7]) = "A" -- Ascending
solve([7,1,2,3,4,5]) = "RA" -- Rotated ascending
solve([4,5,6,1,2,3]) = "RA" -- Rotated ascending
solve([9,8,7,6]) = "D" -- Descending
solve([5,9,8,7,6]) = "RD" -- Rotated Descending
More examples in the test cases.

Good luck!
*/
function solve(arr){
  let a = 0
  let d = 0
  for (let i=0;i<arr.length-1;i++){
    if (arr[i]>arr[i+1]) d++
    else a++
  }
  let r = arr.join``===arr.slice().sort((a,b)=>a-b).join``||arr.join``===arr.slice().sort((a,b)=>b-a).join``
  if(arr.length===3) return arr[0]>arr[2]?'RA':'RD';
  if (a>=d&&r) return 'A'
  if (a<d&&r) return 'D'
  if (a>=d&&!r) return 'RA'
  if (a<d&&!r) return 'RD'
};
