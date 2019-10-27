/*
Write

function consecutiveOnes(nums) {}
that takes in array nums and returns the maximum consecutive 1's

For example

consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
consecutiveOnes([1, 1, 0, 0, 1]) === 2
consecutiveOnes([0, 0, 0, 0, 0]) === 0
PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT
*/
function consecutiveOnes(nums) {
  let max = 0,
    cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) cur++;
    else {
      max = Math.max(max, cur);
      cur = 0;
    }
  }
  return Math.max(max, cur);
}
