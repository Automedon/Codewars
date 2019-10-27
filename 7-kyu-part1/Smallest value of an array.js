function min(arr, toReturn) {
  if (toReturn === "value") return Math.min(...arr);
  return arr.indexOf(Math.min(...arr));
}
