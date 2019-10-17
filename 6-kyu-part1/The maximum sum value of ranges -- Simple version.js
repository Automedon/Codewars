/*
Description:
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Given an array arr that contains some integers(positive, negative or 0), and a range list such as [[start1,end1],[start2,end2],...], start and end are the index of arr and start always less than end. Your task is to calculate the sum value of each range (start index and end index are both inclusive), and return the maximum sum value.

For example:

 Given arr = [1,-2,3,4,-5,-4,3,2,1], 
       range = [[1,3],[0,4],[6,8]]
 should return 6

 calculation process:
 range[1,3] = arr[1]+arr[2]+arr[3] = 5
 range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
 range[6,8] = arr[6]+arr[7]+arr[8] = 6
 So the maximum sum value is 6
Note:
arr/$a always has at least 5 elements;
range/$range/ranges always has at least 1 element;
All inputs are valid;
This is a simple version, if you want some challenge, please try the challenge version.
Some Examples
 maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]) === 6
 maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]) === 5
 maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]) === 0
*/
function maxSum(arr,range){
  let ans = []
  for (let i=0;i<range.length;i++){
    ans.push(arr.slice(range[i][0],range[i][1]+1).reduce((a,b)=>a+b,0))
  }
  return Math.max(...ans)
}
