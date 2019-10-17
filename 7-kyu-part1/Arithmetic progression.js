function arithmeticSequenceElements(a, r, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    {
      arr.push(a + r * i);
    }
  }
  return arr.join(", ");
}
