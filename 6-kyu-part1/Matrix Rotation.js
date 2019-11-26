/*
Description:
Given a matrix represented as a list of string, such as

###.....
..###...
....###.
.....###
.....###
....###.
..###...
###.....
write a function

rotateClockwise(matrix)

that return its 90° clockwise rotation, for our example:

#......#
#......#
##....##
.#....#.
.##..##.
..####..
..####..
...##...
/!\ You must return a rotated copy of matrix! (matrix must be the same before and after calling your function)
Note that the matrix isn't necessarily a square, though it's always a rectangle!
Please also note that the equality m == rotateClockwise(rotateClockwise(rotateClockwise(rotateClockwise(m)))); (360° clockwise rotation), is not always true because rotateClockwise(['']) => [] and rotateClockwise(['','','']) => [] (empty lines information is lost)
*/
function rotateClockwise(matrix) {
  if (matrix.length===0)return []
  let a = []
  for (let i=0;i<matrix[0].length;i++){
    let temp=''
    for (let j=matrix.length-1;j>=0;j--){
      temp+=matrix[j][i]
    }
    a.push(temp)
  }
  return a
}
