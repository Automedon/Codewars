function pattern(n) {
  var number = "",
    output = "";
  while (n > 0) {
    number = number + n;
    output = number + (output ? "\n" : "") + output;
    n--;
  }
  return output;
}
