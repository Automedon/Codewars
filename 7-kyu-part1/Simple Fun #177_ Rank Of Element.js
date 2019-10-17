/*
Description:
Task
Given an array arr, find the rank of the element at the ith position.

The rank of the arr[i] is a value equal to the number of elements less than or equal to arr[i] standing before arr[i], plus the number of elements less than arr[i] standing after arr[i].

Example
For arr = [2,1,2,1,2], i = 2, the result should be 3.

There are 2 elements less than or equal to arr[2] standing before arr[2]:

arr[0] <= arr[2]

arr[1] <= arr[2]

There is only 1 element less than arr[2] standing after arr[2]:

arr[3] <= arr[2]

So the result is 2 + 1 = 3.

Input/Output
[input] integer array arr

An array of integers.

3 <= arr.length <= 50.

[input] integer i

Index of the element whose rank is to be found.

[output] an integer

Rank of the element at the ith position.
*/
function rankOfElement(a, i) {
  const l = a.slice(0, i).filter(e => e <= a[i]).length;
  const r = a.slice(i + 1).filter(e => e < a[i]).length;
  return l + r;
}
