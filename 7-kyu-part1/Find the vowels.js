function vowelIndices(word) {
  let arr = [];
  let a = word.split("");
  for (let i = 0; i < word.length; i++) {
    if (/[aeuoiy]/gi.test(a[i])) {
      arr.push(i + 1);
    }
  }
  return arr;
}
