/*
Description:
Getting the Minimum Absolute Difference
Task
Given an array arr = a1,a2,a3,a4, ... aN and consider the absolute difference between two elements as the absolute value of ai - aj, where i != j for any elements in arr.

Find the minimum absolute difference (MAD) between any two elements in arr.

Example
For arr = [-10,0,-3,1]

The MAD is 1.

Explanation:
``` |0-10| = 10 |-3-(-10)| = 7 |1-10| = 9 |-10-0| = 10 |-3-0| = 3 |1-0| = 1 |-10-(-3)| = 7 |0-3| = 3 |1-3| = 2 |-10-(-3)| = 7 |0-3| = 3 |1-3| = 2 |-10-1)| = 11 |0-1| = 1 |-3-1| = 4 ``` The minimum value is `1`.
Note that the same value can appear more than once in arr. In that case, the MAD will be 0.

Also, each array has at least two elements and its contains only integers. You can consider the arr as a valid one and do not need to validate it.
*/
function getting_mad(arr) {
  let a = Infinity
    for (let i=0;i<arr.length-1;i++){
      for (let j=i+1;j<=arr.length;j++){
        if (Math.abs(arr[i]-arr[j])<a) a = Math.abs(arr[i]-arr[j])
      }
    }
    return a
}
