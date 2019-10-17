/*
Description:
You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.

You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.

Finally, if one of two animals are not present, return "boring without two animals".

Examples
moves = 5

map =
..C......
.........
....m....

returns "Caught!" because the cat can catch the mouse in 4 moves
moves = 5

map =
.C.......
.........
......m..

returns "Escaped!" because the cat cannot catch the mouse in  5 moves
*/
function catMouse(map,moves){
  map=map.split('\n')
  if (!map.some(v=>v.includes('C'))||!map.some(v=>v.includes('m'))) return 'boring without two animals'
  let catX=map.map(v=>v.indexOf('C')).filter(v=>v>-1)*1
  let catY=map.map(v=>v.includes('C')).indexOf(true)+1
  let mX=map.map(v=>v.indexOf('m')).filter(v=>v>-1)*1
  let mY=map.map(v=>v.includes('m')).indexOf(true)+1
  return Math.abs(catX-mX)+Math.abs(catY-mY)<=moves?'Caught!':'Escaped!'
}
