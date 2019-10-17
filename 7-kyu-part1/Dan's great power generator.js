/*
Description:
Dan likes to find the nth power of number. But he doesn't like it when the result is odd!

Return the nth power of each number, unless the result is odd, in which case round the result to the nearest 10.

Eg. if number = 7, and power = 2, result = 50.
*/
function danspower(num, power) {
  let res=Math.pow(num,power)
  return res%2?Math.round(res/10)*10:res
}
