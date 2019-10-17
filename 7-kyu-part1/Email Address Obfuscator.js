obfuscate = function(email) {
  return email.replace('@',' [at] ').replace(/\./g,' [dot] ')
}
