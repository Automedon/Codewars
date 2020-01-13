/*
Description:
When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
Complete function minValue (min_value in Ruby). Two arguments will be given:

arr: An array that contains some integers(positve,negative or zero).

n: A positive integer. n <= arr.length.

Your task is to find the minimum value of each n adjacent elements in arr. Returns by a new array. For example:

arr = [1,2,3,10,-5], n = 2
The min value of each 2 adjacent elements are:
[(1,2)...] --> 1
[.(2,3)..] --> 2
[..(3,10).] --> 3
[...(10,-5)] --> -5

minValue(arr,n) === [1,2,3,-5]
arr = [1,2,3,10,-5], n = 2
The min value of each 2 adjacent elements are:
[(1,2)...] --> 1
[.(2,3)..] --> 2
[..(3,10).] --> 3
[...(10,-5)] --> -5

min_value(arr,n) === [1,2,3,-5]
Some Examples
minValue([1,-2,3,-4,5,-6,7,8],1) === [1,-2,3,-4,5,-6,7,8]
minValue([1,-2,3,-4,5,-6,7,8],2) === [-2,-2,-4,-4,-6,-6,7]
minValue([1,-2,3,-4,5,-6,7,8],3) === [-2,-4,-4,-6,-6,-6]
minValue([1,-2,3,-4,5,-6,7,8],4) === [-4,-4,-6,-6,-6]
min_value([1,-2,3,-4,5,-6,7,8],1) === [1,-2,3,-4,5,-6,7,8]
min_value([1,-2,3,-4,5,-6,7,8],2) === [-2,-2,-4,-4,-6,-6,7]
min_value([1,-2,3,-4,5,-6,7,8],3) === [-2,-4,-4,-6,-6,-6]
min_value([1,-2,3,-4,5,-6,7,8],4) === [-4,-4,-6,-6,-6]
Note:

You can assume that all inputs are valid.

This is a simple version, please look forward to the challenge version ;-)

A bit difficulty, A bit of fun, happy coding ;-)
*/
function minValue(arr,n){
 let a = []
 for (let i=0;i<=arr.length-n;i++){
   a.push(Math.min(...arr.slice(i,n+i)))
 }
  return a
}
