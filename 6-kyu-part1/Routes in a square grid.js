/*
Description:
Given a side length n, traveling only right and down how many ways are there to get from the top left corner to the bottom right corner of an n by n grid?

Your mission is to write a program to do just that!

Add code to route(n) that returns the number of routes for a grid n by n (if n is less than 1 return 0).

Examples:

-100 -> 0

1 -> 2

2 -> 6

20 -> 137846528820
Note: you're traveling on the edges of the squares in the grid not the squares themselves.

PS.If anyone has any suggestions of how to improve this kata please let me know.
*/
let mul = (arr)=>arr.reduce((a,b)=>a*b,1)
function routes(n){
  if (n<1) return 0
  let arr = []
  for (let i=n+1;i<2*n+1;i++){
    arr.push(i)
  }
  let arr2 = []
  for (let i=1;i<n+1;i++){
    arr2.push(i)
  }
  return Math.round(mul(arr)/mul(arr2))
}
