var make_lazy = function(fn) {
  return fn.bind.apply(fn, arguments);
};
