/*
Description:
Your challenge is to create a function that determines whether or not the characters within a word appear in alphabetical order. If the letters appear in order, return 'IN ORDER'. If the letters appear out of order, return 'OUT OF ORDER'. If the letters appear in reverse order, return 'IN REVERSE ORDER'.

For example, the word 'almost' would return 'IN ORDER', 'cat' would return 'OUT OF ORDER', and 'sponge' would return 'IN REVERSE ORDER'.
*/
function order(input){
  if (input.split``.sort().join``===input) return 'IN ORDER'
  if (input.split``.sort().reverse().join``===input) return 'IN REVERSE ORDER'
  return 'OUT OF ORDER'
}
