/*
Description:
Write a function which takes one parameter representing the dimensions of a checkered board. The board will always be square, so 5 means you will need a 5x5 board.

The dark squares will be represented by a unicode white square, while the light squares will be represented by a unicode black square (the opposite colours ensure the board doesn't look reversed on code wars' dark background). It should return a string of the board with a space in between each square and taking into account new lines.

An even number should return a board that begins with a dark square. An odd number should return a board that begins with a light square.

The input is expected to be a whole number that's at least two, and returns false otherwise (Nothing in Haskell).

Examples:

checkeredBoard(5)
returns the string

■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
There should be no trailing white space at the end of each line, or new line characters at the end of the string.

Note
Do not use HTML entities for the squares (e.g. □ for white square) as the code doesn't consider it a valid square. A good way to check is if your solution prints a correct checker board on your local terminal.

Ruby note: CodeWars has encoding issues with rendered unicode in Ruby. You'll need to use unicode source code (e.g. "\u25A0") instead of rendered unicode (e.g "■").
*/
function checkeredBoard(dimension) {
  if (dimension!==parseInt(dimension)||dimension<2) return false
  let light=true
  let arr=[]
  if (dimension%2===0){light=false}
  for (let i=0;i<dimension;i++){
      let temp=''
      for (let j=0;j<dimension;j++){
        if (!light){
          if (j%2==0){
            temp+='□ '
          }else {
            temp+='■ '
          }
        }else {
          if (j%2!=0){
            temp+='□ '
          }else {
            temp+='■ '
          }
        }
    }
      temp=temp.trim()
      arr.push(temp)
      light=!light
  }
  return arr.join`\n`
}
