function alternateSqSum(arr) {
  return arr
    .map((val, i) => (i % 2 ? Math.pow(val, 2) : val))
    .reduce((a, v) => a + v, 0);
}
