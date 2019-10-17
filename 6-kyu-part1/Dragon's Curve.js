/*
Description:
The dragon's curve is a self-similar fractal which can be obtained by a recursive method.

Starting with the string D0 = 'Fa', at each step simultaneously perform the following operations:

replace 'a' with: 'aRbFR'
replace 'b' with: 'LFaLb'
For example (spaces added for more visibility) :

1st iteration: Fa -> F aRbF R
2nd iteration: FaRbFR -> F aRbFR R LFaLb FR
After n iteration, remove 'a' and 'b'. You will have a string with 'R','L', and 'F'. This is a set of instruction. Starting at the origin of a grid looking in the (0,1) direction, 'F' means a step forward, 'L' and 'R' mean respectively turn left and right. After executing all instructions, the trajectory will give a beautifull self-replicating pattern called 'Dragon Curve'

The goal of this kata is to code a function wich takes one parameter n, the number of iterations needed and return the string of instruction as defined above. For example:

n=0, should return: 'F'
n=1, should return: 'FRFR'
n=2, should return: 'FRFRRLFLFR'
n should be a number and non-negative integer. All other case should return the empty string: ''.
*/
Dragon = function(n) {
  if (parseInt(n)!==n||n<0) return ''
  let str='Fa'
  for (let i=0;i<n;i++){
    str=str.replace(/a|b/g,v=>v==='a'?'aRbFR':v==='b'?'LFaLb':v)
  }
  return str.replace(/[ab]/g,'')
}
