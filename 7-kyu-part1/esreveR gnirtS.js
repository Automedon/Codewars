String.prototype.reverse = function reverse() {
  return this.split("")
    .reverse()
    .join("");
};
