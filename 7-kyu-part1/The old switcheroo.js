function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (m, i) => i + 1);
}
