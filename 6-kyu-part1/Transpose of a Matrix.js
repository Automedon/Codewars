/*
Description:
Transpose means is to interchange rows and columns of a two-dimensional array matrix.

[AT]ij=[A]ji

ie: Formally, the i th row, j th column element of AT is the j th row, i th column element of A:


Example :

[[1,2,3],[4,5,6]].transpose() //should return [[1,4],[2,5],[3,6]]
Write a prototype transpose to array in JS or add a .transpose method in Ruby or create a transpose function in Python so that any matrix of order ixj 2-D array returns transposed Matrix of jxi .

Link: To understand array prototype
*/
Array.prototype.transpose = function() {
  let ar = Array.isArray(this[0])
  if (this.length===0&&!ar) return []
  if (this[0].length===0&&ar) return [[]]
  let arr = []
  for (let i=0;i<this[0].length;i++){
    let temp = []
    for (let j=0;j<this.length;j++){
      temp.push(this[j][i])
    }
    arr.push(temp)
  }
  return arr
};
