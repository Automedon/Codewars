/*
Description
For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array and compare the two.

If the sum of the n largest numbers is higher then return 'sum'. If the product of the n smallest numbers is higher then return 'product'. If the 2 values are equal then return 'same'

Note. The array will never be empty and n will always be smaller than the length of the array

Example
  sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) --> 'product'
Explaination
The sum of the 3 highest numbers is 41 + 36 + 20 = 97

The product of the lowest 3 numbers is 8 x 9 x 10 = 720

The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns product
*/
function sumOrProduct(array, n) {
  array=array.sort((a,b)=>a-b)
  let sum=array.reverse().slice(0,n).reduce((a,b)=>a+b,0)
  let product=array.reverse().slice(0,n).reduce((a,b)=>a*b,1)
  return sum>product?'sum':sum<product?'product':'same'
}
