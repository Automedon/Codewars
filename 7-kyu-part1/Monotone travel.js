var isMonotone = function(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1]) ? true : false;
};
