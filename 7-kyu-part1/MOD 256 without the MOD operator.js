function mod256WithoutMod(n) {
  return n < 0
    ? n - -256 * Math.floor(n / -256)
    : n - 256 * Math.floor(n / 256);
}
