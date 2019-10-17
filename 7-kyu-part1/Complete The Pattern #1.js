function pattern(n) {
  var res = [], i;
  for(i = 1; i <= n; i++) {
    res.push(Array(i + 1).join(i));
  }
  return res.join('\n');
}
