/*
Description:
Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.

Secondary Diagonal -- the secondary diagonal of amatrix identifies those elements of the matrix running from North-East to South-West.

For example:

matrix:             [1, 2, 3]
                    [4, 5, 6]
                    [7, 8, 9]

principal diagonal: [1, 5, 9]
secondary diagonal: [3, 5, 7]
Task
Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.

If the principal diagonal is larger, return "Principal Diagonal win!"
If the secondary diagonal is larger, return "Secondary Diagonal win!"
If they are equal, return "Draw!"
Note: You will always receive matrices of the same dimension.
*/

function diagonal(matrix){
  let arr=[];
  let arr2=[];
  for (let i=0;i<matrix.length;i++){
  arr.push(matrix[i][i])
  arr2.push(matrix[i][matrix.length-1-i])
  }
  return arr.reduce((a,b)=>a+b,0)===arr2.reduce((a,b)=>a+b,0)?'Draw!':
          arr.reduce((a,b)=>a+b,0)>arr2.reduce((a,b)=>a+b,0)?'Principal Diagonal win!':
          'Secondary Diagonal win!'
}
