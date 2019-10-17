/*
Description:
Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.

Example:

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
highestRank(arr) //=> returns 3
*/
function highestRank(arr){
  let obj={};
  arr.map(v=>obj[v]=obj[v]?obj[v]+1:1)
  let ans=0;
  let ans1=0
  for (let num in obj){
  num=num*1
  if (obj[num]>=ans){
  ans=obj[num]
  ans1=num
   }
  }
  
  return ans1
}
