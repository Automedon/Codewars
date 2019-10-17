/*
Write

function sliding(nums, k)
That given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example:

Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7      3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7
thus

sliding([1,3,-1,-3,5,3,6,7], 3) === [3, 3, 5, 5, 6, 7]
*/
function sliding(nums, k) {
  let arr = [];
  for (let i = 0; i <= nums.length - k; i++) {
    arr.push(nums.slice(i, i + k));
  }
  arr = arr.map(v => Math.max(...v));
  return arr.includes(-Infinity) ? [] : arr;
}
