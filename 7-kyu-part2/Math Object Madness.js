/*
Description:
Math Object Madness
You are a(n) novice/average/experienced/senior/professional/world-class Developer (choose one) who specialises in Javascript. One day, your naughty little brother/sister/whatever gets hold of your precious computer with all the software and functionality in it and manages to utterly destroy the Javascript
Math
object! Being the Developer that you are, you decide to recover as much of the functionality as possible.

Objective
Most, if not all, of the functionality of Javascript's built-in Math object is disabled. Your goal is to recover the following:

Math.ceil(x)
Math.floor(x)
Math.round(x)
Math.abs(x)
Math.max(args[]) (CAUTION: A variable number of arguments will be passed into the function)
Math.min(args[]) (CAUTION: A variable number of arguments will be passed into the function)
Math.pow(x,y) (you may assume the exponent is always a positive integer)
You may also attempt to fix other methods such as Math.random() or Math.cos() but your code for the other methods will not be tested.

Credits
The idea of this Kata is not entirely original; credits go to BattleRattle's "Math Issues" for inspiring me to make this Kata.
*/
Math.ceil = function (x) {
  if (x===parseInt(x)) return x
  return Math.trunc(x)+1
}
Math.floor = function (x) {
  return Math.trunc(x)
}
Math.round = function (x) {
  if (x===parseInt(x)) return x
  return x.toString().split('.')[1][0]*1>=5?Math.ceil(x):Math.trunc(x)
}
Math.max = function () {
  let ans = arguments[0]
  for (let i=0;i<arguments.length;i++){
    if (ans<arguments[i]) ans=arguments[i]
  }
  return ans
}
Math.min = function () {
  let ans = arguments[0]
  for (let i=0;i<arguments.length;i++){
    if (ans>arguments[i]) ans=arguments[i]
  }
  return ans
}
Math.pow = function (x,pow) {
  return x**pow
}
Math.abs = function (x) {
  return x.toString().replace('-','')*1
}
