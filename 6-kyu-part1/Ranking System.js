/*
Description:
You are given an array of unique numbers. The numbers represent points. The higher the number the higher the points. In the array [1,3,2] 3 is the highest point value so it gets 1st place. 2 is the second highest so it gets second place. 1 is the 3rd highest so it gets 3rd place.

Your task is to return an array giving each number its rank in the array.

input // [1,3,2]
output // [3,1,2]
rankings([1,2,3,4,5]) // [5,4,3,2,1]
rankings([3,4,1,2,5])// [3,2,5,4,1]
rankings([10,20,40,50,30]) // [5, 4, 2, 1, 3]
rankings([1, 10]) // [2, 1]
rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]) // [5, 4, 6, 7, 1, 9, 10, 2, 8, 3]
*/
function rankings(arr){
  return arr.map(v=>arr.slice().sort((a,b)=>b-a).indexOf(v)+1)
}
