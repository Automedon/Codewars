/*
Description:
Given a list of integers, return the nth smallest integer in the list. Only distinct elements should be considered when calculating the answer. n will always be positive (n > 0)

If the nth small integer doesn't exist, return -1 (C++) / None (Python) / nil (Ruby) / null (JavaScript).

Notes:

"indexing" starts from 1
huge lists (of 1 million elements) will be tested
Examples
nthSmallest([1, 3, 4, 5], 7)        ==> null  // n is more than the size of the list
nthSmallest([4, 3, 4, 5], 4)        ==> null  // 4th smallest integer doesn't exist
nthSmallest([45, -10, 4, 5, 4], 4)  ==> 45   // 4th smallest integer is 45
If you get a timeout, just try to resubmit your solution. However, if you always get a timeout, review your code.
*/
function nthSmallest(arr, n) {
  const a = Array.from(new Set(arr)).sort((a,b) => a-b)[n-1];
  return a===undefined?null:a
}
