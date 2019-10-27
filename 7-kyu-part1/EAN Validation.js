function validateEAN(eanCode) {
  var sumMod =
    eanCode
      .slice(0, 12)
      .split("")
      .reduce(function(s, v, i) {
        return s + (i % 2 ? v * 3 : +v);
      }, 0) % 10;

  return eanCode[12] == (sumMod ? 10 - sumMod : 0);
}
