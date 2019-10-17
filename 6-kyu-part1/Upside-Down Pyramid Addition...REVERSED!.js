/*
Description:
If this challenge is too easy for you, check out: https://www.codewars.com/kata/5cc89c182777b00001b3e6a2

Upside-Down Pyramid Addition is the process of taking a list of numbers and consecutively adding them together until you reach one number.

When given the numbers 2, 1, 1 the following process occurs:

 2   1   1
   3   2 
     5
This ends in the number 5.

YOUR TASK
Given the right side of an Upside-Down Pyramid (Ascending), write a function that will return the original list.

EXAMPLE
reverse([5, 2, 1]) => [2, 1, 1]
NOTE: The Upside-Down Pyramid will never be empty and will always consist of positive integers ONLY.


*/
function reverse(right) {
  let arr = [[...right]]
  let temp = []
  for (let i=0;arr[i].length!==1;i++){
    for (let j=1;j<arr[i].length;j++){
      temp.push(arr[i][j-1]-arr[i][j])
    }
    arr.push(temp)
    temp=[]
  }
  return arr.map(v=>v[v.length-1]).reverse()
}
