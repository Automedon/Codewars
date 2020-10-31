/*
Description:
Your task is to create a function called sum_arrays() in Python or addArrays in Javascript, which takes two arrays consisting of integers, and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. The output should be an array of the the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative number as the first index in the array. In this case treat the whole number as a negative number. See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962
*/
function addArrays(a1, a2) {
  if (a1.length===0 && a2.length===0) return []
  if (a1.length===0) return a2
  if (a2.length===0) return a1
  let sum = (parseInt(a1.join``)+parseInt(a2.join``)).toString()
  if (sum[0]=='-'){
    sum = sum.slice(1).split``.map(v=>v*1)
    sum[0] = sum[0] * -1
    return sum
  }
  return sum.split``.map(v=>v*1)
}
