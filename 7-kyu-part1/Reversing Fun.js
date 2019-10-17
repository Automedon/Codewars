function flipNumber(n) {
  var res = "";
  var len = n.length;
  var arr = n.split("")
  for (var i = 1; i <= len; i++) {
    arr.reverse();
    res += arr[0];
    arr.shift();
  }
  return res;
}
