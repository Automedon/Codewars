String.prototype.toJadenCase = function () {
  return this.split(' ').
    map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
};
