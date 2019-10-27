function minValue(values) {
  return +Array.from(new Set(values))
    .sort((a, b) => a - b)
    .join("");
}
