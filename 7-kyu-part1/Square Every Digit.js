function squareDigits(num) {
  return +(num + "")
    .split("")
    .map(value => value * value)
    .join("");
}
