function chain(v, fns) {
  return fns.reduce(function(v, fn) { return fn(v) }, v);
}
