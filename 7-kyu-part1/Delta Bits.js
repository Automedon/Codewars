function convertBits(a, b){
  return ((a^b).toString(2).match(/1/g)||[]).length
}
