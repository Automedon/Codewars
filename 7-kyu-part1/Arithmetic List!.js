var seqlist = function(first, c, l) {
  return Array.from({ length: l }, (value, index) => first + c * index);
};
