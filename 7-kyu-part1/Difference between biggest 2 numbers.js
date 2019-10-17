/*
Description:
#Difference between biggest 2 numbers

You have an array of integers. You need to calcurate the difference between 1st biggest number and 2nd biggest number of an array.

    diffBig2([10, 5, 2]);
In this case, 1st biggest number is 10 and 2nd biggest number is 5. So, this function return 5, the result of 10 - 5.

You can assume that the input array must have 2 or more elements.

The input array has the sort() method disabled, so you will have to solve it in another way.
*/
function diffBig2(arr) {
  let n = Math.max(...arr);
  arr.splice(arr.indexOf(n), 1);
  return n - Math.max(...arr);
}
