function mygcd(x, y) {
  return y == 0 ? x : mygcd(y, x % y);
}
