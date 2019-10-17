function alternateCase(s) {
  return s.split('').map(value=>{if (value!=value.toUpperCase()) return value.toUpperCase();
  return value.toLowerCase()}).join('');
}
