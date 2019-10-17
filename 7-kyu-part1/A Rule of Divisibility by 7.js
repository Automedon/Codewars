const seven = m => {
  let times = 0
  while ((''+m).length > 2) {
    times++
    m = Math.floor(m / 10) - (m % 10) * 2
  }
  return [m, times]
}
