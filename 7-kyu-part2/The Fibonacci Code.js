/*
Description:
Create a function that takes any number, and produces a fibonacci sequence based off that number. A fibonacci sequence is a list of numbers, where each number is the sum of the two numbers preceeding it. The first and second number in the sequence should just be the initial number given. There is also an input for how many numbers long the sequence should be. The output should be an array.

  fibonacci(1,12) // => [1,1,2,3,5,8,13,21,34,55,89,144]
  fibonacci(7,5) // => [7,7,14,21,35]
The function should also work with negative numbers. If the first number given is 0, then the second should be 1, and the sequence should follow as normal afterwards.
*/
function fibonacci(initNum, length) {
  let arr = [initNum,initNum]
  if (initNum===0) arr = [0,1]
  for (let i=1;i<length-1;i++){
    arr.push(arr[i-1]+arr[i])
  }
  return arr
}
