function product(s){
  return (s.match(/\?/g)||[]).length*(s.match(/!/g)||[]).length
}
