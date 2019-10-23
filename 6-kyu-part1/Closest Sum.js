/*
Description:
Given an array (ints) of n integers, find three integers in arr such that the sum is closest to a given number (num), target.

Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

closest_sum([-1, 2, 1, -4], 1) # 2 (-1 + 2 + 1 = 2)
Note: your solution should not modify the input array.
*/
const closestSum = (ints, num) => {

  let arr = []
  for (let i=0;i<ints.length;i++){
    for (let j=i+1;j<ints.length;j++){
          for (let k=j+1;k<ints.length;k++){
            arr.push([ints[i],ints[j],ints[k]])
      }
    }
  }
  let left = arr.map(v=>v.reduce((a,b)=>a+b,0)).filter(v=>v>=num).sort((a,b)=>a-b)[0]
  let right = arr.map(v=>v.reduce((a,b)=>a+b,0)).filter(v=>v<=num).sort((a,b)=>b-a)[0]
  let min = Math.abs(left-num)
  let min2 = Math.abs(right-num)
  if (min<min2) return left
  if (min>min2) return right
  return [left,right].filter(v=>typeof v==='number')[0]*1
}
