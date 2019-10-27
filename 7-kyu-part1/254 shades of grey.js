function shadesOfGrey(n) {
  var shades = [];

  for (var i = 1; i <= Math.min(n, 254); i++) {
    var grey = ("0" + i.toString(16)).slice(-2);
    shades.push("#" + grey + grey + grey);
  }

  return shades;
}
