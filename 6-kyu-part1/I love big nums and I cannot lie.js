/*
Description:
Write

function biggest(nums)
that given an array of numbers >= 0, will arrange them such that they form the biggest number.

For example:

biggest([1, 2, 3]) === '321'
biggest([3, 30, 34, 5, 9]) === '9534330'
The results will be large so make sure to return a string.
*/
function biggest(nums) {
  return nums
    .map(v => v.toString())
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join("")
    .replace(/^0+/, "0");
}
