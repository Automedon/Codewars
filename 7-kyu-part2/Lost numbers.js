/*
Description:
Numbers are lost somewhere in the arrays, help them find each other!

In this kata you'll be given 2 n-deep arrays with one number somewhere in there (or no number, just empty n-deep array). Write a function, that finds those numbers and return their summ

example

findAndSumm([[[[[2]]]]], [[[5]]]) / -> 7
findAndSumm([[[6]]], [[[[[3]]]]]) / -> 9
*/
const findAndSumm = (arr1, arr2) => {
  return arr1.toString()*1+arr2.toString()*1
}
