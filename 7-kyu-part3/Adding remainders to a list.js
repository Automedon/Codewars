/*
Description:
This is a problem that involves adding numbers to items in a list. In a list you will have to add the item's remainder when divided by a given divisor to each item.
For example if the item is 40 and the divisor is 3 you would have to add 1 since 40 minus the closest multiple of 3 which is 39 is 1. So the 40 in the list will become 41. You would have to return the modified list in this problem.
For this problem you will receive a divisor called div as well as simple list of whole numbers called nums. Good luck and happy coding.

Examples
nums = [2, 7, 5, 9, 100, 34, 32, 0], div = 3
  ==>  [4, 8, 7, 9, 101, 35, 34, 0] 

nums = [1000, 999, 998, 997], div = 5
   ==> [1000, 1003, 1001, 999]

nums = [], div = 2
   ==> []
Note: random tests check lists containing non-negative integers up to 10000 elements.
*/

function solve(nums, div) {
  const arr = []
  for (let i=0;i<nums.length;i++){
    if(nums[i]%div===0){
      arr.push(nums[i])
    } else {
      let temp = nums[i]
      let add = 0
      while(temp%div!==0){
        temp-=1
        add+=1
      }
      arr.push(nums[i]+add)
    }
  }
  return arr
}
