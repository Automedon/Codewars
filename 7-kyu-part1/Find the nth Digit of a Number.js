var findDigit = function(num, nth) {
  if (nth <= 0) return -1;
  let nums = "" + Math.abs(num);
  return nums.slice(nums.length - nth, nums.length - nth + 1) * 1;
};
