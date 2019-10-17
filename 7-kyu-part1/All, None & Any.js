Array.prototype.all = function(p) {
  // TODO: Implement this function
  return this.filter(p).length == this.length;
};
Array.prototype.none = function(p) {
  return this.filter(p).length == 0;
};
Array.prototype.any = function(p) {
  return this.filter(p).length > 0;
};
