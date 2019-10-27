function powerOf4(n) {
  return n > 1 ? Number.isInteger(Math.log(n) / Math.log(4)) : false;
}
