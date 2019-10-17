function vowel2index(str) {
   return str.replace(/[aeiou]/ig, (m, i) => i + 1);
}
