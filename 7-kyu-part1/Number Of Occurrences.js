Array.prototype.numberOfOccurrences = function(n) {
  return this.filter(value => value == n).length;
};
