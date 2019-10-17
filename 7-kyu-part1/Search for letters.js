function change(string){
  let result = Array.apply(null, Array(26)).map(c => '0');
  string.toLowerCase().replace(/[^a-z]/, '').split('').forEach(c => result[c.charCodeAt(0) - 97] = 1);
  return result.join('');
}
