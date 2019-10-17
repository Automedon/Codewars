const generate = (length) => {
  let bits = ''
  for (let i = 0; i < length; i++) {
    bits += Math.round(Math.random())
  }
  
  return bits
}
