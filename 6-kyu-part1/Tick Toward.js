/*
Description:
Define a function that generates medial values between two coordinates and returns them in an array from start to target. For example, if the starting point is [1,1] and the target point is [3,2] then the shortest route from start to target would be [[1,1], [2,2], [3,2]]. The route should go only through integral coordinates.

Note: you should move diagonally until the path from your current position to the target can be represented as a fully horizontal/vertical line.

Examples:
tickToward([5,5],[5,7])  // => [[5,5],[5,6],[5,7]]
tickToward([3,2],[4,5])  // => [[3,2],[4,3],[4,4],[4,5]]
tickToward([5,1],[5,-2]) // => [[5,1],[5,0],[5,-1],[5,-2]]
*/
function tickToward([s1,s2],[e1,e2]){
  let arr1 = [];
  let arr2 = [];
  if (e1<s1){
    for (let i=s1;i>=e1;i--){
      arr1.push(i)
    }
  } 
  else {
    for (let i=s1;i<=e1;i++){
      arr1.push(i)
    } 
  }
    if (e2<s2){
    for (let i=s2;i>=e2;i--){
      arr2.push(i)
    }
  } else {
    for (let i=s2;i<=e2;i++){
      arr2.push(i)
    } 
  }
  let max = Math.max(arr1.length,arr2.length)
  let arr3 = [];
  for (let i=0;i<max;i++){
    arr3.push([(arr1[i]?arr1[i]:arr1[i]===0?0:arr1[arr1.length-1]),(arr2[i]?arr2[i]:arr2[i]===0?0:arr2[arr2.length-1])])
  }
  return arr3
}
