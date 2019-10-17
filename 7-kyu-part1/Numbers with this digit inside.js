function numbersWithDigitInside(n, d) {
  var m = [];
  for (let i = 1; i <= n; i++) {
    if (new RegExp(d).test(i + "")) m.push(i);
  }
  return [
    m.length,
    m.reduce((s, c) => s + c, 0),
    m.length ? m.reduce((s, c) => s * c, 1) : 0
  ];
}
