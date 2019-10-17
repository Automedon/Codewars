/*
Description:
Create an identity matrix of the specified size( >= 0).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]   
*/
function getMatrix(number) {
  let arr = [];
  for (let i = 0; i < number; i++)
    arr.push(Array.from({ length: number }, (v, j) => (j === i ? 1 : 0)));
  return arr;
}
