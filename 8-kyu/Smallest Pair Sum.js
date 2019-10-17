/*
Description:
Given an array of numbers, find the smallest pair sum in the array.

For example

[10,14,2,23,19] should return 12 (i.e. sum of 10,2)

[99,2,2,23,19] should return 4 (i.e. sum of 2,2)

Input array contains minimum two elements and every element is a number. Note :

not all elements are distinct, and duplicates are not ignored
Ex :

[1,1,2] => 1+1 = 2
*/
function smallestPairSum(numbers)
{
  numbers=numbers.sort((a,b)=>a-b)
  return numbers[0]+numbers[1]
}
