/*
Description:
You've made it through the moat and up the steps of knowledge. You've won the temples games and now you're hunting for treasure in the final temple run. There's good news and bad news. You've found the treasure but you've triggered a nasty trap. You'll surely perish in the temple chamber.

With your last movements, you've decided to draw an "X" marks the spot for the next archeologist.

Given an odd number, n, draw an X for the next crew. Follow the example below.

markSpot(5) ->

X       X
  X   X
    X
  X   X
X       X

For a clearer understanding of the output, let '.' represent a space and \n the newline.
X.......X\n
..X...X\n
....X\n
..X...X\n
X.......X\n

markSpot(3) ->

X   X
  X
X   X  
markSpot(5) #

X       X
  X   X
    X
  X   X
X       X

For a clearer understanding of the output, let '.' represent a space and \n the newline.
X.......X\n
..X...X\n
....X\n
..X...X\n
X.......X\n

markSpot(3) #

X   X
  X
X   X  
If n = 1 return 'X\n' and if you're given an even number or invalid input, return '?'.

The output should be a string with no spaces after the final X on each line, but a \n to indicate a new line.
*/
function markSpot(n) {
  if (typeof n!=='number'||n%2===0||n<1) return '?'
  let arr = Array.from({length:n},v=>Array.from({length:n*n},v=>' '))
  for (let i=0,j=0,k=n-1;i<n;i++,j+=2,k--){
    arr[i][j]='X'
    arr[k][j]='X'
  }
  return arr.map(v=>v.join``.replace(/ *$/,'\n')).join``
}
