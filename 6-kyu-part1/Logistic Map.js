/*
Description:
Our AAA company is in need of some software to help with logistics: you will be given the width and height of a map, a list of x coordinates and a list of y coordinates of the supply points, starting to count from the top left corner of the map as 0.

Your goal is to return a two dimensional array/list with every item having the value of the distance of the square itself from the closest supply point expressed as a simple integer.

Quick examples:

logisticMap(3,3,[0],[0])
//returns
//[[0,1,2],
// [1,2,3],
// [2,3,4]]
logisticMap(5,2,[0,4],[0,0])
//returns
//[[0,1,2,1,0],
// [1,2,3,2,1]]
Remember that our company is operating with trucks, not drones, so you can simply use Manhattan distance. If supply points are present, they are going to be within the boundaries of the map; if no supply point is present on the map, just return None/nil/null in every cell.

logisticMap(2,2,[],[])
//returns
//[[None,None],
// [None,None]]
Note: this one is taken (and a bit complicated) from a problem a real world AAA company [whose name I won't tell here] used in their interview. It was done by a friend of mine. It is nothing that difficult and I assume it is their own version of the FizzBuzz problem, but consider candidates were given about 30 mins to solve it.
*/
function logisticMap(width, height, xs, ys) {
  const str = v => typeof v === 'string'
  let arr = Array.from({ length: height }, (v, i) =>
    Array(width).fill(xs.length ? 'x' : null)
  )
  xs.map((v, i) => (arr[ys[i]][xs[i]] = 0))
  if (xs.length === 0) return arr
  for (let i = 0; i <= arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0, z = arr[0].length - 1; k < arr[0].length; k++, z--) {
        if (typeof arr[j][z] !== 'string') {
          let n = arr[j][z] + 1
          let top = arr[j - 1] && arr[j - 1][z] ? arr[j - 1][z] : false
          let right = arr[j] && arr[j][z + 1] ? arr[j][z + 1] : false
          let bot = arr[j + 1] && arr[j + 1][z] ? arr[j + 1][z] : false
          let left = arr[j] && arr[j][z - 1] ? arr[j][z - 1] : false
          if (top && (str(top) || top > n)) arr[j - 1][z] = n
          if (right && (str(right) || right > n)) arr[j][z + 1] = n
          if (bot && (str(bot) || bot > n)) arr[j + 1][z] = n
          if (left && (str(left) || left > n)) arr[j][z - 1] = n
        }
        if (typeof arr[j][k] !== 'string') {
          let n = arr[j][k] + 1
          let top = arr[j - 1] && arr[j - 1][k] ? arr[j - 1][k] : false
          let right = arr[j] && arr[j][k + 1] ? arr[j][k + 1] : false
          let bot = arr[j + 1] && arr[j + 1][k] ? arr[j + 1][k] : false
          let left = arr[j] && arr[j][k - 1] ? arr[j][k - 1] : false
          if (top && (str(right) || top > n)) arr[j - 1][k] = n
          if (right && (str(right) || right > n)) arr[j][k + 1] = n
          if (bot && (str(bot) || bot > n)) arr[j + 1][k] = n
          if (left && (str(left) || left > n)) arr[j][k - 1] = n
        }
      }
    }
  }
  return arr
}
