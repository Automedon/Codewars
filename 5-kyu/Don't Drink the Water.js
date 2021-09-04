/*
Description:
Don't Drink the Water

Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

[                            [
 ['H', 'H', 'W', 'O'],        ['O','O','O','O']
 ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
 ['H', 'H', 'O', 'O']         ['H','H','H','H']
 ]                           ]
 
The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.
*/

function separateLiquids(glass) {
  const obj = {
    O:0,
    A:0,
    W:0,
    H:0
  }
  const newGlass = glass.map(v=>v.map(x=>{
    if(x==='O') obj.O += 1
    if(x==='A') obj.A += 1
    if(x==='W') obj.W += 1
    if(x==='H') obj.H += 1
  }))
  for(let i = 0;i<glass.length;i++){
    for(let j = 0;j<glass[i].length;j++){
      if(obj.O){
        newGlass[i][j] = 'O'
        obj.O-=1
      }
      else if(obj.A){
        newGlass[i][j] = 'A'
        obj.A-=1
      }
      else if(obj.W){
        newGlass[i][j] = 'W'
        obj.W-=1
      }
      else if(obj.H){
        newGlass[i][j] = 'H'
        obj.H-=1
      }
    }
  }
  return newGlass;
}
