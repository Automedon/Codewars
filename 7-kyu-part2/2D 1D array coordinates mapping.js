/*
Description:
Hello! Your are given x and y and 2D array size tuple (width, height) and you have to:

Calculate the according index in 1D space (zero-based).
Do reverse operation.
Implement:
to_1D(x, y, size):
  --returns index in 1D space
to_2D(n, size)
  --returns x and y in 2D space
1D array: [0, 1, 2, 3, 4, 5, 6, 7, 8]
2D array: [[0 -> (0,0), 1 -> (1,0), 2 -> (2,0)], 
           [3 -> (0,1), 4 -> (1,1), 5 -> (2,1)], 
           [6 -> (0,2), 7 -> (1,2), 8 -> (2,2)]]
to_1D(0, 0, (3,3)) returns 0
to_1D(1, 1, (3,3)) returns 4
to_1D(2, 2, (3,3)) returns 8
to_2D(5, (3,3)) returns (2,1)
to_2D(3, (3,3)) returns (0,1)
Assume all input are valid: 1 < width < 500; 1 < height < 500
*/
function to1D(x, y, size) {
    let arr1 =[];
    let j=0
    let tempArr=[]
    for (let i=0;i<size[1];i++){
    tempArr=[]
        for (let k=0;k<size[0];k++){
        tempArr.push(j++)
        }
        arr1.push(tempArr)
      }
    return arr1[y][x]
}

function to2D(n, size) {
    let arr =[];
    let j=0
    let tempArr=[]
    for (let i=0;i<size[1];i++){
    tempArr=[]
        for (let k=0;k<size[0];k++){
        tempArr.push(j++)
        }
        arr.push(tempArr)
      }
      for (let i=0;i<arr.length;i++){
    
        for (let k=0;k<arr[0].length;k++){
        if (arr[i][k]===n) return [k,i]
        }
      }
}
