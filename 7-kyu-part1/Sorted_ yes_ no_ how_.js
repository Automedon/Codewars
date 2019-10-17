function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? "yes, ascending"
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? "yes, descending"
    : "no";
}
