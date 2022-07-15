/*
Description:
Write

function combine()
that combines arrays by alternatingly taking elements passed to it.
E.g

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
Arrays can have different lengths.
*/
function combine(...arr) {
  let newArr = [];
  let max = Math.max(...arr.map(v => v.length));
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[j][i] ? newArr.push(arr[j][i]) : 1;
    }
  }
  return newArr;
}
