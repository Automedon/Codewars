function sortDict(dict) {
  return Object.keys(dict)
    .map(function(v) {
      return [+v || v, dict[v]];
    })
    .sort(function(a, b) {
      return a[1] < b[1];
    });
}
