/*
Description:
I guess this is a ?kyu kata. series #4:
Find 0 and 1

Description
Give You an 2D array that only contains 0 and 1, please find out how many 1 are surrounded by 0 or 0 surrounded by 1. "Surrounded" means that its four directions(up down left right) all are diffrent numbers.

Example:

[
[0,1,1,0,1,1,0,1,0],
[1,0,1,0,1,1,0,1,0],
[0,1,1,0,0,1,0,1,0],
[0,0,1,0,1,0,1,1,0],
[0,0,1,0,0,1,0,1,0],
[0,0,1,0,1,0,0,1,0],
[0,0,1,0,0,1,0,1,0]
]

There are three 1 surrounded by 0(the x in the array): 
[
[0,1,1,0,1,1,0,1,0],
[1,0,1,0,1,1,0,1,0],
[0,1,1,0,0,1,0,1,0],
[0,0,1,0,x,0,1,1,0],
[0,0,1,0,0,x,0,1,0],
[0,0,1,0,x,0,0,1,0],
[0,0,1,0,0,1,0,1,0]
]

There are two 0 surrounded by 1(the x in the array): 
[
[0,1,1,0,1,1,0,1,0],
[1,x,1,0,1,1,0,1,0],
[0,1,1,0,0,1,0,1,0],
[0,0,1,0,1,x,1,1,0],
[0,0,1,0,0,1,0,1,0],
[0,0,1,0,1,0,0,1,0],
[0,0,1,0,0,1,0,1,0]
]

So we need return a number 5 (three 1 + two 0)
OK, that's all. I guess this is a 7kyu kata. If you agree, please rank it as 7kyu and vote very;-) If you think this kata is too easy or too hard, please shame me by rank it as you want and vote somewhat or none :[

Task
Complete function find01 that accepts a argument arr, return a number that is the count of 1 surrounded by 0 or 0 surrounded by 1.
*/
function find01(arr) {
  let count = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[0].length - 1; j++) {
      let p = arr[i][j];
      let u = arr[i - 1][j];
      let l = arr[i][j - 1];
      let d = arr[i + 1][j];
      let r = arr[i][j + 1];
      if (p !== u && p !== d && p !== l && p !== r) count++;
    }
  }
  return count;
}
