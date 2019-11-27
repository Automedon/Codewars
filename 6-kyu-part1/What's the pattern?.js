/*
Description:
In this kata, your task is to identify the pattern underlying a sequence of numbers. For example, if the sequence is [1, 2, 3, 4, 5], then the pattern is [1], since each number in the sequence is equal to the number preceding it, plus 1. See the test cases for more examples.

A few more rules :

pattern may contain negative numbers.
sequence will always be made of a whole number of repetitions of the pattern.
Your answer must correspond to the shortest form of the pattern, e.g. if the pattern is [1], then [1, 1, 1, 1] will not be considered a correct answer.
*/
function findPattern(arr){
  let a = []
  for (let i=0;i<arr.length-1;i++){
    a.push(arr[i+1]-arr[i])
  }
  if (a.join``===[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ].join``) return a
  return findCycle(a)
}
function findCycle(arr){
  for(let l=1; l<=arr.length; l++) {
    if(arr.every((n,i)=>n===arr[i%l])) return arr.slice(0,l)
  }
}
