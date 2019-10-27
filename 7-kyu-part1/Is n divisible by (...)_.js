function isDivisible(firstN, ...otherN) {
  return otherN.every(n => firstN % n === 0);
}
