/*
Description:
THE CHALLENGE:
Take a random positive integer with 0<n<17 digits, each of which is also positive, and rearrange the digits to return a string containing:

the smallest possible integer, comprising all digits
a single instance of the smallest digit (i.e., if there are several instances of the smallest digit, output it just once)
the index position of the smallest digit in the original integer.
a single instance of the largest digit.
For example: if you input the number 96781191 in the smallestNum function, you should get '11167899, 1, 4, 9'.
*/
function smallestNum(num){
  let str =num.toString().split``.sort()
  let smallest = Math.min(...str)
  let largest = Math.max(...str)
  let index = num.toString().indexOf(smallest)
  return `${str.join``}, ${smallest}, ${index}, ${largest}`
}
