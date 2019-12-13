/*
Description:
You're a programmer in a SEO company. The SEO specialist of your company gets the list of all project keywords everyday, then he looks for the longest keys to analyze them.

You will get the list with keywords and must write a simple function that returns the biggest search keywords and sorts them in lexicographical order.

For instance you might get:

'key1', 'key2', 'key3', 'key n', 'bigkey2', 'bigkey1'
And your function should return:

"'bigkey1', 'bigkey2'"
Don't forget to rate this kata! Thanks :)
*/
function theBiggestSearchKeys(...arr) {
  if (!arr.length) return '\'\''
  const max = Math.max(...arr.map(v=>v.length))
  return arr.filter(v=>v.length===max).sort().map(a => `'${a}'`).join(', ');
}
