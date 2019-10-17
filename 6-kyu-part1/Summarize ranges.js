/*
Description:
Given a sorted array of numbers, return the summary of its ranges.

Examples
summaryRanges([1, 2, 3, 4]) === ["1->4"]
summaryRanges([1, 1, 1, 1, 1]) === ["1"]
summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]) === ["0->7"]
summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7", "9->10"]
summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]) ===["-2", "0->7", "9->10", "12"]
*/
function summaryRanges(nums) {
  nums=[...new Set(nums)]
  let arr = [];
  let temp = []
  for (let i=0;i<nums.length;i++){
    temp.push(nums[i])
    if (nums[i+1]-nums[i]!==1){
      arr.push(temp)
      temp=[]
    }
  }
  return arr.map(v=>v.length===1?v+'':v[0]+'->'+v[v.length-1])
}
