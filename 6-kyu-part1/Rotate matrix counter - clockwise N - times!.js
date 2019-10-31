/*
Description:
In this kata your mission is to rotate matrix counter - clockwise N-times.

So, you will have 2 inputs:

1)matrix

2)a number, how many times to turn it
And an output is turned matrix.
Example:

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16]]

times_to_turn = 1
It should return this:

[[4, 8, 12, 16],
 [3, 7, 11, 15],
 [2, 6, 10, 14],
 [1, 5, 9, 13]])
Note: all matrixes will be square. Also random tests will have big numbers in input (times to turn)

Happy coding!
*/
function rotateAgainstClockwise(m, times){
  let a = m.slice()
  let g = []
  for (let k=0;k<times%4;k++){
    for (let i=0;i<a.length;i++){
      let temp = []
         for (let j=0;j<a[i].length;j++){
          temp.push(a[j][a[i].length-1-i])
      }
      g.push(temp)
    }
     a=g.slice()
     if (k===(times%4)-1) return g
     g=[]
  }
  return a
}
