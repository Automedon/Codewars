/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #20:
Make a matrix

Task
Complete function makeMatrix that accept two numeric array arr1 and arr2. Pick out the unique elements of the two array (unique meaning is that the elements in an array does not appear in the other array), and then make a square as large as possible. For example, if there are 17 such elements of two arrays, sorted them in ascending order, and then make a 4x4 matrix (an 2D array). The remaining elements will abandon. If no unique element found, return [].

Examples
makeMatrix([0,1,2,3,4,5],[5,6,7,8,9]) return:
[
[0,1,2],
[3,4,6],
[7,8,9]
]

makeMatrix([1,2,3,4,5],[5,6,7,8,9]) return:
[
[1,2],
[3,4]
]

makeMatrix([1,2,3,4,5],[2,3,4,5,6]) return:
[
[1]
]

makeMatrix([1,2,3,4,5],[1,2,3,4,5]) return:
[]
*/
function makeMatrix(arr1, arr2) {
  let a1 = arr1.filter(v => !arr2.includes(v));
  let a2 = arr2.filter(v => !arr1.includes(v));
  let a = a1.concat(a2);
  a = a.sort((a, b) => a - b);
  let d = 0;
  for (let i = 0; i <= a.length; i++) {
    if (Math.pow(i, 2) <= a.length) d = i;
  }
  let arr = [];
  for (let j = 0, i = 0; j < d; j++, i += d) {
    arr.push(a.slice(i, i + d));
  }
  return arr;
}
