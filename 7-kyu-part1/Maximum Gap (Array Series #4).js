/*
Description:
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_

Repeatition of numbers in the array/list could occur.

The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
1- maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
2- maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between |-3- (-27) | = 23 .

Note : Regardless the sign of negativity .

3- maxGap ({-7,-42,-809,-14,-12}) ==> return (767)
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between | -809- (-42) | = 767 .

Note : Regardless the sign of negativity .

4- maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between | 64 - 640 | = 576 .

Note : Regardless the sign of negativity .
*/

function maxGap(numbers) {
  let res = [];
  let arr = numbers
    .sort((a, b) => b - a)
    .map((v, i, arr) => {
      res.push(arr[i + 1] - arr[i]);
    });
  return Math.abs(res.filter(v => !isNaN(v)).sort((a, b) => a - b)[0]);
}
