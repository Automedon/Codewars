function removeRotten(bag) {
  return bag ? bag.map(x => x.toLowerCase().replace(/rotten/gi, "")) : [];
}
