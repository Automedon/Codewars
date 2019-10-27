function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}
