function sumOfN(n) {
  for (var i = 0, list = []; i <= Math.abs(n); i++) {
    list.push((list[i - 1] || 0) + i * (n < 0 ? -1 : 1))
  }
  
  return list
}
