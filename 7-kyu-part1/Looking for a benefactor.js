function newAvg(arr, newavg) {
  const x = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0);
  if (x <= 0) throw "ValueError";
  return Math.ceil(x);
}
