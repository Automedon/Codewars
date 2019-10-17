/*
Description:
Coding 3min : A*B=C

This is the simple version of Fastest Code series. If you need some challenges, please try the Performance version

Task:
Give you a number array numbers and a number c.

Find out a pair of numbers(we called them number a and number b) from the array numbers, let a*b=c, result format is an array [a,b]

The array numbers is a sorted array, value range: -100...100

The result will be the first pair of numbers, for example,findAB([1,2,3,4,5,6],6) should return [1,6], instead of [2,3]
*/
function findAB(numbers,c){
   for (let i=0;i<numbers.length;i++){
     for (let j=1+i;j<numbers.length;j++){
      if (numbers[i]*numbers[j]===c) return [numbers[i],numbers[j]]
     }
   }
  return null
}
